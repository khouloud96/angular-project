import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-muteni-header',
  templateUrl: './muteni-header.component.html',
  styleUrl: './muteni-header.component.css',
})
export class MuteniHeaderComponent implements OnInit {
  currentLang: string = '';
  availableLanguages: string[] = [];

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.availableLanguages = this.languageService.getAvailableLanguages();
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.currentLang = lang;
    });
  }

  switchLang(lang: string): void {
    this.languageService.changeLanguage(lang);
  }

  // Récupère l'URL du drapeau en fonction de la langue
  getFlag(lang: string): string {
    return lang === 'fr'
      ? 'assets/images/fr-flag.svg'
      : 'assets/images/en-flag.svg';
  }
}
