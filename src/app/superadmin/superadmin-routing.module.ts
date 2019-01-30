import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperadminHomeComponent } from './superadmin-home/superadmin-home.component';
import { NewBookRequestsComponent } from './new-book-requests/new-book-requests.component';
import { BookManagementComponent } from './book-management/book-management.component';

const routes: Routes = [
  { path: 'superAdmin', component: SuperadminHomeComponent },
  { path: 'superAdmin/newBookRequests', component: NewBookRequestsComponent },
  { path: 'superAdmin/bookManagement', component: BookManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
