import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubspeciesComponent } from './subspecies.component';

describe('SubspeciesComponent', () => {
  let component: SubspeciesComponent;
  let fixture: ComponentFixture<SubspeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubspeciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
