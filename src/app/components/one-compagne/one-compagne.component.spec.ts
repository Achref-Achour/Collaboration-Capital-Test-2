import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCompagneComponent } from './one-compagne.component';

describe('OneCompagneComponent', () => {
  let component: OneCompagneComponent;
  let fixture: ComponentFixture<OneCompagneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneCompagneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCompagneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
