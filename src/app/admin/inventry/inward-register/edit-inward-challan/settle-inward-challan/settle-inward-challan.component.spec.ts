import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettleInwardChallanComponent } from './settle-inward-challan.component';

describe('SettleInwardChallanComponent', () => {
  let component: SettleInwardChallanComponent;
  let fixture: ComponentFixture<SettleInwardChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettleInwardChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettleInwardChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
