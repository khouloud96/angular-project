import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private http: HttpClient) {}

  searchAddress(query: string): Observable<any> {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      query
    )}&addressdetails=1`;
    return this.http.get(url);
  }
}
