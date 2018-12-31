import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanDetailsComponent } from './challan-details.component';

describe('ChallanDetailsComponent', () => {
  let component: ChallanDetailsComponent;
  let fixture: ComponentFixture<ChallanDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
