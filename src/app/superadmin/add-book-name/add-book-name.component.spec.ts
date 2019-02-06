import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookNameComponent } from './add-book-name.component';

describe('AddBookNameComponent', () => {
  let component: AddBookNameComponent;
  let fixture: ComponentFixture<AddBookNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
