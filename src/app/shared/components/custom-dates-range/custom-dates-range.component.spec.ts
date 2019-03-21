import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDatesRangeComponent } from './custom-dates-range.component';

describe('CustomDatesRangeComponent', () => {
  let component: CustomDatesRangeComponent;
  let fixture: ComponentFixture<CustomDatesRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDatesRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDatesRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
