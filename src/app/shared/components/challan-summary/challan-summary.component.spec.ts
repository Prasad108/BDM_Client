import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanSummaryComponent } from './challan-summary.component';

describe('ChallanSummaryComponent', () => {
  let component: ChallanSummaryComponent;
  let fixture: ComponentFixture<ChallanSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
