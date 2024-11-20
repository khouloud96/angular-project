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
    { id: 'US', name: 'États-Unis' },
    { id: 'FR', name: 'France' },
    { id: 'DE', name: 'Allemagne' },
    { id: 'IN', name: 'Inde' },
  ];
}
