import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminRoutingModule } from './superadmin-routing.module';
import { SuperadminHomeComponent } from './superadmin-home/superadmin-home.component';
import { NewBookRequestsComponent } from './new-book-requests/new-book-requests.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { BookManagementComponent } from './book-management/book-management.component';
import { CentersComponent } from './centers/centers.component';
import { CreateNewCenterComponent } from './centers/create-new-center/create-new-center.component';
import { UsersComponent } from './centers/users/users.component';
import { CreateNewAdminComponent } from './centers/users/create-new-admin/create-new-admin.component';
@NgModule({
  declarations:
    [
      SuperadminHomeComponent,
      NewBookRequestsComponent,
      BookManagementComponent,
      CentersComponent,
      CreateNewCenterComponent,
      UsersComponent,
      CreateNewAdminComponent
    ],
  imports: [
    CommonModule,
    SuperadminRoutingModule,
    MDBBootstrapModule,
    FormsModule
  ]
})
export class SuperadminModule { }
