import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuteniHeaderComponent } from './components/muteni-header/muteni-header.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { StartPopupComponent } from './components/start-popup/start-popup.component';
import { MultiStepFormComponent } from './components/honorDeclarationForm/multi-step-form/multi-step-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StepOneFormComponent } from './components/honorDeclarationForm/step-one-form/step-one-form.component';
import { StepTwoFormComponent } from './components/honorDeclarationForm/step-two-form/step-two-form.component';
import { StepThreeFormComponent } from './components/honorDeclarationForm/step-three-form/step-three-form.component';
import { StepRecapFormComponent } from './components/honorDeclarationForm/step-recap-form/step-recap-form.component';
import { SuccessRedirectComponent } from './components/honorDeclarationForm/success-redirect/success-redirect.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

// Fonction pour charger les fichiers de traduction
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

//initialises the TranslateService and according to the configuration provided
@NgModule({
  declarations: [
    AppComponent,
    MuteniHeaderComponent,
    ProfileComponent,
    StartPopupComponent,
    MultiStepFormComponent,
    StepOneFormComponent,
    StepTwoFormComponent,
    StepThreeFormComponent,
    StepRecapFormComponent,
    SuccessRedirectComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ReactiveFormsModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
