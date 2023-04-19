import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompagneDetailsComponent } from './compagne-details.component';

describe('CompagneDetailsComponent', () => {
  let component: CompagneDetailsComponent;
  let fixture: ComponentFixture<CompagneDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompagneDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompagneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
