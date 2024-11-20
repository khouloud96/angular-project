import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrl: './multi-step-form.component.css',
})
export class MultiStepFormComponent {
  currentStep = 1;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      step1: this.fb.group({
        firstName: [
          '',
          [
            Validators.required,
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
        clientNumber: [
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
        placeOfBirth: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(100),
          ],
        ],
        countryOfBirth: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50),
          ],
        ],
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
        country: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50),
          ],
        ],
      }),
      step3: this.fb.group({
        // Placeholder for step 3 validations
      }),
    });
  }

  // Gestion des étapes
  nextStep() {
    if (this.currentStep < 4) this.currentStep++;
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

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      alert('Formulaire soumis avec succès !');
    } else {
      alert('Veuillez compléter tous les champs requis.');
    }
  }
}
