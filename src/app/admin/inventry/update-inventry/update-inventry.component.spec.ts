import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInventryComponent } from './update-inventry.component';

describe('UpdateInventryComponent', () => {
  let component: UpdateInventryComponent;
  let fixture: ComponentFixture<UpdateInventryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateInventryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInventryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
