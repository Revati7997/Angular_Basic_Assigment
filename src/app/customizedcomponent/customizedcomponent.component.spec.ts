import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedcomponentComponent } from './customizedcomponent.component';

describe('CustomizedcomponentComponent', () => {
  let component: CustomizedcomponentComponent;
  let fixture: ComponentFixture<CustomizedcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizedcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
