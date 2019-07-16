import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonsaiTreesComponent } from './bonsai-trees.component';

describe('BonsaiTreesComponent', () => {
  let component: BonsaiTreesComponent;
  let fixture: ComponentFixture<BonsaiTreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonsaiTreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonsaiTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
