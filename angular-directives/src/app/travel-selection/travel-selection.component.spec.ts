import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelSelectionComponent } from './travel-selection.component';

describe('TravelSelectionComponent', () => {
  let component: TravelSelectionComponent;
  let fixture: ComponentFixture<TravelSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
