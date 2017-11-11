import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoennComponent } from './hoenn.component';

describe('HoennComponent', () => {
  let component: HoennComponent;
  let fixture: ComponentFixture<HoennComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoennComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoennComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
