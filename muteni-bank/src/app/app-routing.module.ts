import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';
import { SuccessRedirectComponent } from './success-redirect/success-redirect.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'honor-declaration-form', component: MultiStepFormComponent },
  { path: 'form-sent-success', component: SuccessRedirectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
