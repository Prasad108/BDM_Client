import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeSelectComponent } from './three-select.component';

describe('ThreeSelectComponent', () => {
  let component: ThreeSelectComponent;
  let fixture: ComponentFixture<ThreeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
