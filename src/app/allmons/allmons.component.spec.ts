import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmonsComponent } from './allmons.component';

describe('AllmonsComponent', () => {
  let component: AllmonsComponent;
  let fixture: ComponentFixture<AllmonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
