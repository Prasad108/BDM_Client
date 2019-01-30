import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminRoutingModule } from './superadmin-routing.module';
import { SuperadminHomeComponent } from './superadmin-home/superadmin-home.component';
import { NewBookRequestsComponent } from './new-book-requests/new-book-requests.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { BookManagementComponent } from './book-management/book-management.component';
@NgModule({
  declarations: 
    [
      SuperadminHomeComponent,
      NewBookRequestsComponent,
      BookManagementComponent
    ],
  imports: [
    CommonModule,
    SuperadminRoutingModule,
    MDBBootstrapModule,
    FormsModule
  ]
})
export class SuperadminModule { }
