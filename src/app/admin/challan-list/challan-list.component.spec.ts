import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanListComponent } from './challan-list.component';

describe('ChallanListComponent', () => {
  let component: ChallanListComponent;
  let fixture: ComponentFixture<ChallanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
