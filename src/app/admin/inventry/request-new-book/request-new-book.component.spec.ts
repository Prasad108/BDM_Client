import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNewBookComponent } from './request-new-book.component';

describe('RequestNewBookComponent', () => {
  let component: RequestNewBookComponent;
  let fixture: ComponentFixture<RequestNewBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestNewBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestNewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
