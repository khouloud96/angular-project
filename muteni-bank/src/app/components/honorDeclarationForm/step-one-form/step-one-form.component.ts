import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-one-form',
  templateUrl: './step-one-form.component.html',
  styleUrl: './step-one-form.component.css',
})
export class StepOneFormComponent {
  @Input() parentForm!: FormGroup;
}
