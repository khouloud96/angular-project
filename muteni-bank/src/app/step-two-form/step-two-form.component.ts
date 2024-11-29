import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-step-two-form',
  templateUrl: './step-two-form.component.html',
  styleUrl: './step-two-form.component.css',
})
export class StepTwoFormComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  countries: Array<{ id: string; name: string }> = [];
  isChevronRotated = false;
  errorLoadingCountries = false;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe({
      next: (countries) => {
        if (countries.length === 0) {
          console.warn('Aucun pays disponible pour la langue actuelle.');
        }
        console.log('Pays transformés reçus :', countries);
        this.countries = countries;
        this.errorLoadingCountries = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des pays:', err);
        this.errorLoadingCountries = true;
      },
    });
  }

  onFocusChevron() {
    this.isChevronRotated = true;
  }

  onBlurChevron() {
    this.isChevronRotated = false;
  }
}
