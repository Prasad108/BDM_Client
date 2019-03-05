import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent} from 'app/admin/admin-home/admin-home.component';
import {ChallanListComponent} from 'app/admin/challan-list/challan-list.component';
import {ChallanDetailsComponent} from 'app/shared/components/challan-details/challan-details.component';
import {EditChallanComponent} from './edit-challan/edit-challan.component';
import { AddUpdateChallanComponent } from './edit-challan/add-update-challan/add-update-challan.component';
import { NewChallanComponent } from './challan-list/new-challan/new-challan.component';
import { AddNewBookToChallanComponent } from './edit-challan/add-new-book-to-challan/add-new-book-to-challan.component';
import { RequestNewBookComponent } from './inventry/request-new-book/request-new-book.component';
import { SettleChallanComponent } from './edit-challan/settle-challan/settle-challan.component';
import { EditChallanGuard } from 'app/shared/guards/edit-challan.guard';
import { AdminGuard } from 'app/shared/guards/admin.guard';
import { UsersComponent } from 'app/shared/components/users/users.component';
import { CreateNewUserComponent } from './../shared/components/create-new-user/create-new-user.component';
import { BookRequestsComponent } from './inventry/book-requests/book-requests.component';
import { InwardRegisterComponent } from './inventry/inward-register/inward-register.component';
import { EditInwardChallanComponent } from './inventry/inward-register/edit-inward-challan/edit-inward-challan.component';
import { AddNewBookToInwardChallanComponent } from './inventry/inward-register/edit-inward-challan/add-new-book-to-inward-challan/add-new-book-to-inward-challan.component';

const routes: Routes = [
  {path: 'admin', component: AdminHomeComponent,
  canActivate: [AdminGuard],
    children: [
    {
      path: '',
      children: [
        {path: 'challans', component: ChallanListComponent},
        {path: 'challans/new', component: NewChallanComponent},
        {path: 'challans/details/:id', component: ChallanDetailsComponent},
        {path: 'challans/edit/:id', component: EditChallanComponent, canActivate: [EditChallanGuard] },
        {path: 'challans/edit/:id/update', component: AddUpdateChallanComponent , canActivate: [EditChallanGuard] },
        {path: 'challans/edit/:id/addNewBook', component: AddNewBookToChallanComponent, canActivate: [EditChallanGuard] },
        {path: 'challans/edit/:id/settle', component: SettleChallanComponent },
        {path: 'inventry/inwardRegister', component: InwardRegisterComponent},
        {path: 'inventry/inwardRegister/edit/:id', component: EditInwardChallanComponent},
        {path: 'inventry/inwardRegister/edit/:id/addNewBook', component: AddNewBookToInwardChallanComponent},
        {path: 'inventry/bookRequests/RequestNewBook', component: RequestNewBookComponent},
        {path: 'inventry/bookRequests', component: BookRequestsComponent},
        {path: 'users', component: UsersComponent},
        {path: 'users/new', component: CreateNewUserComponent},
        {path: 'users/update', component: CreateNewUserComponent},
      ]
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AdminRoutingModule { }
