import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRequestsComponent } from './book-requests.component';

describe('BookRequestsComponent', () => {
  let component: BookRequestsComponent;
  let fixture: ComponentFixture<BookRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
