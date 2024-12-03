import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-redirect',
  templateUrl: './success-redirect.component.html',
  styleUrl: './success-redirect.component.css',
})
export class SuccessRedirectComponent {
  constructor(private router: Router) {}

  redirect() {
    this.router.navigate(['/']);
  }
}
