import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
      }),
      step2: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
      }),
      step3: this.fb.group({
        address: ['', Validators.required],
        city: ['', Validators.required],
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
