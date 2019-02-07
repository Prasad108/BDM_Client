import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperadminHomeComponent } from './superadmin-home/superadmin-home.component';
import { NewBookRequestsComponent } from './new-book-requests/new-book-requests.component';
import { CentersComponent } from './centers/centers.component';
import { CreateNewCenterComponent } from './centers/create-new-center/create-new-center.component';
import { UsersComponent } from './centers/users/users.component';
import { CreateNewAdminComponent } from './centers/users/create-new-admin/create-new-admin.component';
import { AddBookNameComponent } from './add-book-name/add-book-name.component';
import { AddBookTypeComponent } from './add-book-type/add-book-type.component';
import { AddLanguageComponent } from './add-language/add-language.component';

const routes: Routes = [
  { path: 'superAdmin', component: SuperadminHomeComponent },
  { path: 'superAdmin/newBookRequests', component: NewBookRequestsComponent },
  { path: 'superAdmin/centers', component: CentersComponent },
  { path: 'superAdmin/BookName', component: AddBookNameComponent },
  { path: 'superAdmin/BookType', component: AddBookTypeComponent },
  { path: 'superAdmin/BookLanguage', component: AddLanguageComponent },
  { path: 'superAdmin/centers/new', component: CreateNewCenterComponent },
  { path: 'superAdmin/centers/:id/users', component: UsersComponent },
  { path: 'superAdmin/centers/:id/users/newAdmin', component: CreateNewAdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
