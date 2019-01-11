import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChalanListComponent } from './user-chalan-list.component';

describe('UserChalanListComponent', () => {
  let component: UserChalanListComponent;
  let fixture: ComponentFixture<UserChalanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChalanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChalanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
