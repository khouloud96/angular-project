import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPopupComponent } from './start-popup.component';

describe('StartPopupComponent', () => {
  let component: StartPopupComponent;
  let fixture: ComponentFixture<StartPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StartPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
