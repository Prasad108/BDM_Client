import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettleChallanComponent } from './settle-challan.component';

describe('SettleChallanComponent', () => {
  let component: SettleChallanComponent;
  let fixture: ComponentFixture<SettleChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettleChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettleChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
