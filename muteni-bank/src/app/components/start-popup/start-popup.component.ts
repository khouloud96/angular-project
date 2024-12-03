import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-popup',
  templateUrl: './start-popup.component.html',
  styleUrl: './start-popup.component.css',
})
export class StartPopupComponent {
  constructor(private router: Router) {}

  onContinue(): void {
    // Étape 1 : Fermer manuellement la modale
    const modalElement = document.getElementById('popupModal');
    if (modalElement) {
      modalElement.style.display = 'none'; // Cache la modale
      modalElement.setAttribute('aria-hidden', 'true'); // Marque la modale comme cachée
      modalElement.classList.remove('show'); // Supprime la classe "show" si elle est utilisée pour l'affichage
    }

    // Étape 2 : Supprimer l'arrière-plan (modal-backdrop) manuellement
    const backdropElements = document.querySelectorAll('.modal-backdrop');
    backdropElements.forEach((backdrop) => backdrop.remove());

    // **Étape 3 : Réinitialiser le style du body**
    document.body.style.overflow = ''; // Réinitialise l'overflow
    document.body.classList.remove('modal-open'); // Supprime toute classe Bootstrap résiduelle

    this.router.navigate(['/honor-declaration-form']);
  }
}
