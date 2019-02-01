import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperadminHomeComponent } from './superadmin-home/superadmin-home.component';
import { NewBookRequestsComponent } from './new-book-requests/new-book-requests.component';
import { BookManagementComponent } from './book-management/book-management.component';
import { CentersComponent } from './centers/centers.component';
import { CreateNewCenterComponent } from './centers/create-new-center/create-new-center.component';
import { UsersComponent } from './centers/users/users.component';
import { CreateNewAdminComponent } from './centers/users/create-new-admin/create-new-admin.component';

const routes: Routes = [
  { path: 'superAdmin', component: SuperadminHomeComponent },
  { path: 'superAdmin/newBookRequests', component: NewBookRequestsComponent },
  { path: 'superAdmin/bookManagement', component: BookManagementComponent },
  { path: 'superAdmin/centers', component: CentersComponent },
  { path: 'superAdmin/centers/new', component: CreateNewCenterComponent },
  { path: 'superAdmin/centers/:id/users', component: UsersComponent },
  { path: 'superAdmin/centers/:id/users/newAdmin', component: CreateNewAdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
