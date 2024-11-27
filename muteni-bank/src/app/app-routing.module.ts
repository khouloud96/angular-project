import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';
import { SuccessRedirectComponent } from './success-redirect/success-redirect.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { breadcrumb: 'breadcrumb.profile' },
  },
  {
    path: 'form-sent-success',
    component: SuccessRedirectComponent,
  },
  {
    path: 'honor-declaration-form',
    component: MultiStepFormComponent,
    data: { breadcrumb: 'breadcrumb.form' },
  },
  { path: 'honor-declaration-form/step1', component: MultiStepFormComponent },
  { path: 'honor-declaration-form/step2', component: MultiStepFormComponent },
  { path: 'honor-declaration-form/step3', component: MultiStepFormComponent },
  { path: 'honor-declaration-form/step4', component: MultiStepFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
