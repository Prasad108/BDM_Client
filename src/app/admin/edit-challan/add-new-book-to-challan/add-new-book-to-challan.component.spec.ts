import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBookToChallanComponent } from './add-new-book-to-challan.component';

describe('AddNewBookToChallanComponent', () => {
  let component: AddNewBookToChallanComponent;
  let fixture: ComponentFixture<AddNewBookToChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewBookToChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBookToChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
