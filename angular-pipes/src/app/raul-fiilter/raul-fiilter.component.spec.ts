import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaulFiilterComponent } from './raul-fiilter.component';

describe('RaulFiilterComponent', () => {
  let component: RaulFiilterComponent;
  let fixture: ComponentFixture<RaulFiilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaulFiilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaulFiilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
