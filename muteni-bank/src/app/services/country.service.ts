import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer et transformer les pays
  getCountries(): Observable<{ id: string; name: string }[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(
        (data) =>
          data
            .filter((country) => country.translations?.fra) // Filtrer les pays avec traduction française
            .map((country) => ({
              id: country.cca2, // Utiliser le code alpha-2 comme ID
              name: country.translations.fra.common, // Nom en français
            }))
            .sort((a, b) => a.name.localeCompare(b.name)) // Trier par nom
      )
    );
  }
}
