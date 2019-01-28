import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookRequestsComponent } from './new-book-requests.component';

describe('NewBookRequestsComponent', () => {
  let component: NewBookRequestsComponent;
  let fixture: ComponentFixture<NewBookRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBookRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBookRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
