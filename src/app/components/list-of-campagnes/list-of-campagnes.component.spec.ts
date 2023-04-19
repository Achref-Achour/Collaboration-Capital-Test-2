import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCampagnesComponent } from './list-of-campagnes.component';

describe('ListOfCampagnesComponent', () => {
  let component: ListOfCampagnesComponent;
  let fixture: ComponentFixture<ListOfCampagnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfCampagnesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCampagnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
