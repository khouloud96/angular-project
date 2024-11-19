import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-two-form',
  templateUrl: './step-two-form.component.html',
  styleUrl: './step-two-form.component.css',
})
export class StepTwoFormComponent {
  @Input() parentForm!: FormGroup;
}
