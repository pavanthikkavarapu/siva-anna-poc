import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubbirdComponent } from './subbird.component';

describe('SubbirdComponent', () => {
  let component: SubbirdComponent;
  let fixture: ComponentFixture<SubbirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubbirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubbirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
