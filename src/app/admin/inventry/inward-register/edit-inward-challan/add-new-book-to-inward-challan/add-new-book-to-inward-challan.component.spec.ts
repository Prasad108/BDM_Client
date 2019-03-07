import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBookToInwardChallanComponent } from './add-new-book-to-inward-challan.component';

describe('AddNewBookToInwardChallanComponent', () => {
  let component: AddNewBookToInwardChallanComponent;
  let fixture: ComponentFixture<AddNewBookToInwardChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewBookToInwardChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBookToInwardChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
