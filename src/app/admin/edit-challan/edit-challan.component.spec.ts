import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChallanComponent } from './edit-challan.component';

describe('EditChallanComponent', () => {
  let component: EditChallanComponent;
  let fixture: ComponentFixture<EditChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
