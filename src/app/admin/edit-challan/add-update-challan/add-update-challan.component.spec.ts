import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateChallanComponent } from './add-update-challan.component';

describe('AddUpdateChallanComponent', () => {
  let component: AddUpdateChallanComponent;
  let fixture: ComponentFixture<AddUpdateChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
