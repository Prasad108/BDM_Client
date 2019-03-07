import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardRegisterComponent } from './inward-register.component';

describe('InwardRegisterComponent', () => {
  let component: InwardRegisterComponent;
  let fixture: ComponentFixture<InwardRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
