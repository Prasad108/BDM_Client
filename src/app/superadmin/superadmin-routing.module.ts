import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperadminHomeComponent } from './superadmin-home/superadmin-home.component';
import { NewBookRequestsComponent } from './new-book-requests/new-book-requests.component';
import { BookManagementComponent } from './book-management/book-management.component';
import { CentersComponent } from './centers/centers.component';
import { CreateNewCenterComponent } from './centers/create-new-center/create-new-center.component';
import { AddBookNameComponent } from './add-book-name/add-book-name.component';
import { UsersComponent } from 'app/shared/components/users/users.component';
import { CreateNewUserComponent } from './../shared/components/create-new-user/create-new-user.component';
const routes: Routes = [
  { path: 'superAdmin', component: SuperadminHomeComponent },
  { path: 'superAdmin/newBookRequests', component: NewBookRequestsComponent },
  { path: 'superAdmin/bookManagement', component: BookManagementComponent },
  { path: 'superAdmin/centers', component: CentersComponent },
  { path: 'superAdmin/BookName', component: AddBookNameComponent },
  { path: 'superAdmin/centers/new', component: CreateNewCenterComponent },
  { path: 'superAdmin/centers/:id/users', component: UsersComponent },
  { path: 'superAdmin/centers/:id/users/newAdmin', component: CreateNewUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
