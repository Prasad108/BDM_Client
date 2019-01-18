import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventryComponent } from './inventry.component';

describe('InventryComponent', () => {
  let component: InventryComponent;
  let fixture: ComponentFixture<InventryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
