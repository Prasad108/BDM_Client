import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewCenterComponent } from './create-new-center.component';

describe('CreateNewCenterComponent', () => {
  let component: CreateNewCenterComponent;
  let fixture: ComponentFixture<CreateNewCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
