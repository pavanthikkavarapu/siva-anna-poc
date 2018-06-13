import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReptileComponent } from './reptile.component';

describe('ReptileComponent', () => {
  let component: ReptileComponent;
  let fixture: ComponentFixture<ReptileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReptileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReptileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
