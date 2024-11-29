import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {}

  searchAddress(query: string): Observable<any> {
    const lang = this.languageService.getCurrentLanguage(); // Méthode pour obtenir la langue courante
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      query
    )}&addressdetails=1&accept-language=${lang}`;
    return this.http.get(url);
  }
}
