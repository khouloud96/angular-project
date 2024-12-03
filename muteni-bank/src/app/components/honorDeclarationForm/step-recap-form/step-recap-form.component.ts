import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-recap-form',
  templateUrl: './step-recap-form.component.html',
  styleUrl: './step-recap-form.component.css',
})
export class StepRecapFormComponent {
  @Input() parentForm!: FormGroup;
  @Input() formData: any;
  @Input() goToStep!: (step: number) => void;
}
