import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubhumanComponent } from './subhuman.component';

describe('SubhumanComponent', () => {
  let component: SubhumanComponent;
  let fixture: ComponentFixture<SubhumanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubhumanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubhumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
