import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextConfiguratorComponent } from './text-configurator.component';

describe('TextConfiguratorComponent', () => {
  let component: TextConfiguratorComponent;
  let fixture: ComponentFixture<TextConfiguratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextConfiguratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
