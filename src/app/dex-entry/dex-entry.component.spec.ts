import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DexEntryComponent } from './dex-entry.component';

describe('DexEntryComponent', () => {
  let component: DexEntryComponent;
  let fixture: ComponentFixture<DexEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DexEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DexEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
