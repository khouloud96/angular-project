import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-two-form',
  templateUrl: './step-two-form.component.html',
  styleUrl: './step-two-form.component.css',
})
export class StepTwoFormComponent {
  @Input() parentForm!: FormGroup;

  // liste de pays à sélectionner
  countries: Array<{ id: string; name: string }> = [
    { id: 'États-Unis', name: 'États-Unis' },
    { id: 'France', name: 'France' },
    { id: 'Allemagne', name: 'Allemagne' },
    { id: 'Inde', name: 'Inde' },
    { id: 'Tunisie', name: 'Tunisie' },
  ];

  isChevronRotated = false;

  onFocusChevron() {
    this.isChevronRotated = true; // Applique l'effet de rotation au focus
  }

  onBlurChevron() {
    this.isChevronRotated = false; // Retire l'effet de rotation au blur
  }
}
