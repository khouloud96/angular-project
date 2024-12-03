import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepRecapFormComponent } from './step-recap-form.component';

describe('StepRecapFormComponent', () => {
  let component: StepRecapFormComponent;
  let fixture: ComponentFixture<StepRecapFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepRecapFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepRecapFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
