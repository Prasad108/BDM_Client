import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInwardChallanCbDetailsComponent } from './update-inward-challan-cb-details.component';

describe('UpdateInwardChallanCbDetailsComponent', () => {
  let component: UpdateInwardChallanCbDetailsComponent;
  let fixture: ComponentFixture<UpdateInwardChallanCbDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateInwardChallanCbDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInwardChallanCbDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
