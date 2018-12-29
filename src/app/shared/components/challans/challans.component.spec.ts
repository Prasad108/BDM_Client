import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallansComponent } from './challans.component';

describe('ChallansComponent', () => {
  let component: ChallansComponent;
  let fixture: ComponentFixture<ChallansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
