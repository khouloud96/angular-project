import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-step-three-form',
  templateUrl: './step-three-form.component.html',
  styleUrl: './step-three-form.component.css',
})
export class StepThreeFormComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  @Input() formData: any;

  combinedTextA: string = '';
  combinedTextB: string = '';

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    // Restaurer l'état du formulaire si disponible
    const savedState = this.formData.taxSituation;
    if (savedState) {
      this.parentForm.patchValue({
        taxSituation: this.translate.instant(savedState),
      });
    }

    const textApart1 = this.translate.instant('form.textApart1');
    const textAClientNumber = this.formData.deceasedClientNumber;
    const textApart2 = this.translate.instant('form.textApart2');
    const textApart3 = this.translate.instant('form.textApart3');

    this.combinedTextA = `${textApart1} ${textAClientNumber} ${textApart2} ${textApart3}`;

    const textBpart1 = this.translate.instant('form.textBpart1');
    const textBpart2 = this.translate.instant('form.textBpart2');
    const textBpart3 = this.translate.instant('form.textBpart3');

    this.combinedTextB = `${textBpart1} ${textBpart2} ${textBpart3}`;
  }
}
