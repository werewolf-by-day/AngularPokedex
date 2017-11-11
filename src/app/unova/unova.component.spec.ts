import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnovaComponent } from './unova.component';

describe('UnovaComponent', () => {
  let component: UnovaComponent;
  let fixture: ComponentFixture<UnovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
