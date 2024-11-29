import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {}

  /**
   * Méthode pour récupérer et transformer les pays en fonction de la langue actuelle
   * Utilise la langue en tant que déclencheur pour mettre à jour les données dynamiquement.
   */
  /* getCountries(): Observable<{ id: string; name: string }[]> {
    // S'abonner à la langue courante et faire une requête pour les pays à chaque changement
    return this.languageService.currentLanguage$.pipe(
      switchMap((lang) =>
        this.http.get<any[]>(this.apiUrl).pipe(
          map(
            (data) =>
              data
                .filter((country) => country.translations?.[lang]) // Filtrer les pays ayant une traduction dans la langue actuelle
                .map((country) => ({
                  id: country.cca2, // Utiliser le code alpha-2 comme ID
                  name:
                    country.translations[lang]?.common || country.name.common, // Nom dans la langue actuelle ou par défaut
                }))
                .sort((a, b) => a.name.localeCompare(b.name)) // Trier par nom
          )
        )
      )
    );
  }*/

  getCountries(): Observable<{ id: string; name: string }[]> {
    return this.languageService.currentLanguage$.pipe(
      switchMap((lang) => {
        const restCountriesLang =
          this.languageService.getRestCountriesLang(lang);
        console.log('Langue pour RestCountries:', restCountriesLang);
        return this.http.get<any[]>(this.apiUrl).pipe(
          map((data) => {
            console.log("Exemple d'entrée complète des données :", data[0]); // Examinez les clés disponibles
            return data
              .map((country) => {
                const name =
                  country.translations?.[restCountriesLang]?.common || // Langue actuelle
                  country.translations?.['fra']?.common || // Repli : Français
                  country.name.common; // Repli final : Nom générique
                return {
                  id: country.cca2,
                  name,
                };
              })
              .sort((a, b) => a.name.localeCompare(b.name));
          })
        );
      })
    );
  }
}
