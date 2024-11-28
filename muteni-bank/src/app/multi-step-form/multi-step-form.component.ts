import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { AddressService } from '../services/address.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrl: './multi-step-form.component.css',
})
export class MultiStepFormComponent implements OnInit {
  currentStep = 1;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private addressService: AddressService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.form = this.fb.group({
      step1: this.fb.group({
        deceasedFirstName: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50),
            Validators.pattern('^[A-Za-zÀ-ÖØ-öø-ÿ\\-\\s]+$'), // Nom avec lettres, accents, tirets
          ],
        ],
        deceasedLastName: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50),
            Validators.pattern('^[A-Za-zÀ-ÖØ-öø-ÿ\\-\\s]+$'), // Nom avec lettres, accents, tirets
          ],
        ],
        deceasedDateOfBirth: ['', [Validators.required]],
        deceasedClientNumber: [
          '',
          [
            Validators.required,
            Validators.pattern('^[0-9]{8}$'), // Exactement 8 chiffres
          ],
        ],
      }),
      step2: this.fb.group({
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50),
            Validators.pattern('^[A-Za-zÀ-ÖØ-öø-ÿ\\-\\s]+$'), // Nom avec lettres, accents, tirets
          ],
        ],
        secondName: [
          '',
          [
            Validators.minLength(2),
            Validators.maxLength(50),
            Validators.pattern('^[A-Za-zÀ-ÖØ-öø-ÿ\\-\\s]+$'), // Nom avec lettres, accents, tirets
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50),
            Validators.pattern('^[A-Za-zÀ-ÖØ-öø-ÿ\\-\\s]+$'), // Nom avec lettres, accents, tirets
          ],
        ],
        dateOfBirth: ['', [Validators.required]],
        cityOfBirth: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(100),
          ],
        ],
        countryOfBirth: ['', [Validators.required]],
        address: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(200),
          ],
        ],
        addressComplement: ['', [Validators.maxLength(200)]],
        postalCode: [
          '',
          [Validators.required, Validators.pattern('^[0-9]{5}$')],
        ],
        city: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(100),
          ],
        ],
        country: ['', [Validators.required]],
      }),
      step3: this.fb.group({
        taxSituation: ['', [Validators.required]],
      }),
    });
  }

  ngOnInit(): void {
    this.updateCurrentStepBasedOnRoute();
    this.onAddressChanges();
    // Charger les données sauvegardées
    this.loadFormData();
  }

  private updateCurrentStepBasedOnRoute(): void {
    const currentRoute = this.router.url;

    if (currentRoute.includes('step1')) {
      this.currentStep = 1;
    } else if (currentRoute.includes('step2')) {
      this.currentStep = 2;
    } else if (currentRoute.includes('step3')) {
      this.currentStep = 3;
    } else if (currentRoute.includes('step4')) {
      this.currentStep = 4;
    }
  }

  onAddressChanges(): void {
    this.form.get('step2.address')?.valueChanges.subscribe((value) => {
      if (value && value.length > 3) {
        this.addressService.searchAddress(value).subscribe({
          next: (response) => {
            if (response?.length > 0) {
              const firstResult = response[0].address;
              this.form.patchValue({
                step2: {
                  postalCode: firstResult.postcode || '',
                  city:
                    firstResult.city ||
                    firstResult.town ||
                    firstResult.village ||
                    '',
                  country: firstResult.country || '',
                },
              });
            } else {
              console.warn('Aucune adresse trouvée.');
            }
          },
          error: (error: HttpErrorResponse) => {
            if (error.status === 504) {
              console.error("Erreur 504 : Temps d'attente dépassé.");
            } else {
              console.error(`Erreur HTTP : ${error.message}`);
            }
          },
        });
      }
    });
  }

  // Gestion des étapes
  nextStep() {
    const currentStepForm = this.form.get('step' + this.currentStep);
    console.log('currentStepForm: ', currentStepForm);

    if (!currentStepForm) {
      console.error(`FormGroup de l'étape ${this.currentStep} introuvable.`);
      return;
    }

    // Si le formulaire est invalide, marquez tous les champs comme touchés pour afficher les erreurs
    if (currentStepForm.invalid) {
      console.warn(`Formulaire invalide à l'étape ${this.currentStep}`);
      currentStepForm.markAllAsTouched(); // Affiche les messages d'erreur
      return; // Bloque le passage à l'étape suivante
    }

    // Sauvegarde des données dans le localStorage
    this.saveFormData();

    // Si le formulaire est valide, passez à l'étape suivante
    if (this.currentStep < 4) {
      this.currentStep++;
      console.log(`Passage à l'étape suivante : Étape ${this.currentStep}`);
    }

    // Naviguer à l'étape correspondante
    const stepRoutes = ['step1', 'step2', 'step3', 'step4'];
    this.router.navigate([
      '/honor-declaration-form',
      stepRoutes[this.currentStep - 1],
    ]);
  }

  previousStep() {
    if (this.currentStep > 1) this.currentStep--;
  }

  goToStep(step: number) {
    this.currentStep = step;
  }

  get formData() {
    return {
      ...this.form.value.step1,
      ...this.form.value.step2,
      ...this.form.value.step3,
    };
  }

  // Sauvegarde formData dans le Local Storage
  saveFormData(): void {
    const formData = this.form.value;
    this.localStorageService.setItem('formData', JSON.stringify(formData));
  }

  // Charge formData depuis le Local Storage
  loadFormData(): void {
    const savedData = this.localStorageService.getItem('formData'); // Récupère les données sauvegardées
    if (savedData) {
      const parsedData = JSON.parse(savedData); // Parse les données JSON
      this.form.patchValue(parsedData); // Met à jour le formulaire avec `patchValue`
    }
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.router.navigate(['/form-sent-success']);

      // Après soumission, videz le localStorage
      this.localStorageService.removeItem('formData');
      console.log('LocalStorage vidé après soumission.');
    }
  }
}
