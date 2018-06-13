import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubreptileComponent } from './subreptile.component';

describe('SubreptileComponent', () => {
  let component: SubreptileComponent;
  let fixture: ComponentFixture<SubreptileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubreptileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubreptileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
