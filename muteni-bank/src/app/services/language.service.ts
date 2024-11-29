import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  // Crée un BehaviorSubject pour suivre la langue courante
  private currentLanguage = new BehaviorSubject<string>('fr');

  // Observable exposé pour s'abonner à la langue courante
  currentLanguage$ = this.currentLanguage.asObservable();

  // Liste des langues disponibles
  availableLanguages = ['fr', 'en'];

  constructor(private translate: TranslateService) {
    // Détecte la langue du navigateur, sinon utilise 'fr' par défaut
    const browserLang = this.translate.getBrowserLang() || 'fr';

    // Définir la langue par défaut et utiliser la langue du navigateur
    this.translate.setDefaultLang(browserLang);
    this.translate.use(browserLang);

    // Met à jour la langue courante dans le BehaviorSubject
    this.currentLanguage.next(browserLang);
  }

  // Méthode pour changer de langue
  changeLanguage(lang: string): void {
    // Vérifie si la langue est disponible avant de changer
    if (this.availableLanguages.includes(lang)) {
      this.translate.use(lang); // Change la langue via ngx-translate
      this.currentLanguage.next(lang); // Met à jour le BehaviorSubject
    }
  }

  // Méthode pour obtenir la liste des langues disponibles
  getAvailableLanguages(): string[] {
    return this.availableLanguages;
  }

  getRestCountriesLang(lang: string): string {
    const langMap: { [key: string]: string } = {
      fr: 'fra',
      en: 'eng',
    };
    return langMap[lang] || 'fra'; // Par défaut : français
  }

  getCurrentLanguage(): string {
    return this.currentLanguage.value; // Retourne la langue actuelle
  }
}
