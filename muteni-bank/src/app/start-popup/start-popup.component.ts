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
    this.router.navigate(['/']);
  }
}
