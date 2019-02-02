import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewAdminComponent } from './create-new-admin.component';

describe('CreateNewAdminComponent', () => {
  let component: CreateNewAdminComponent;
  let fixture: ComponentFixture<CreateNewAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
