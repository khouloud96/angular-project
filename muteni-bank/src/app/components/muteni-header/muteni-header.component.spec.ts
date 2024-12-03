import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuteniHeaderComponent } from './muteni-header.component';

describe('MuteniHeaderComponent', () => {
  let component: MuteniHeaderComponent;
  let fixture: ComponentFixture<MuteniHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MuteniHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuteniHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
