import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInwardChallanComponent } from './edit-inward-challan.component';

describe('EditInwardChallanComponent', () => {
  let component: EditInwardChallanComponent;
  let fixture: ComponentFixture<EditInwardChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInwardChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInwardChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
