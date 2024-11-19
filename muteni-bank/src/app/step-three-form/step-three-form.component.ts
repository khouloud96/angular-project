import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-three-form',
  templateUrl: './step-three-form.component.html',
  styleUrl: './step-three-form.component.css',
})
export class StepThreeFormComponent {
  @Input() parentForm!: FormGroup;
}
