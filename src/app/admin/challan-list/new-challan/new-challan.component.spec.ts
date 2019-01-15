import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChallanComponent } from './new-challan.component';

describe('NewChallanComponent', () => {
  let component: NewChallanComponent;
  let fixture: ComponentFixture<NewChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
