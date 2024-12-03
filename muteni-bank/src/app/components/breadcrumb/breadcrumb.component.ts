import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css',
})
export class BreadcrumbComponent implements OnInit, OnChanges, OnDestroy {
  @Input() currentStep!: number;
  breadcrumbs: { label: string; url: string }[] = [];
  private langChangeSubscription!: Subscription;

  // Étape correspondante avec ses labels de traduction
  private stepLabels: { [key: number]: string } = {
    1: 'breadcrumb.deceasedInformation',
    2: 'breadcrumb.yourInformation',
    3: 'breadcrumb.taxSituation',
    4: 'breadcrumb.summary',
  };

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.updateBreadcrumbs();

    // S'abonner aux événements de changement de langue
    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.updateBreadcrumbs(); // Mettre à jour les breadcrumbs à chaque changement de langue
      }
    );
  }

  ngOnChanges(): void {
    this.updateBreadcrumbs(); // Met à jour les breadcrumbs quand l'étape change
  }

  ngOnDestroy(): void {
    // Désabonnez-vous pour éviter les fuites de mémoire
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  private updateBreadcrumbs(): void {
    // Crée le fil d'Ariane dynamiquement
    this.breadcrumbs = [
      {
        label: this.translate.instant('breadcrumb.profile'),
        url: '/profile',
      },
    ];

    for (let step = 1; step <= this.currentStep; step++) {
      if (this.stepLabels[step]) {
        this.breadcrumbs.push({
          label: this.translate.instant(this.stepLabels[step]),
          url: `/honor-declaration-form/step${step}`,
        });
      }
    }
  }
}
