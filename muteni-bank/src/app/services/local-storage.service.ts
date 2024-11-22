import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  // Méthode pour sauvegarder des données
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Méthode pour récupérer des données
  getItem(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  // Méthode pour supprimer un élément
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Méthode pour vider tout le Local Storage
  clear(): void {
    localStorage.clear();
  }
}
