import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent} from 'app/admin/admin-home/admin-home.component';
import {ChallanListComponent} from 'app/admin/challan-list/challan-list.component';
import {ChallanDetailsComponent} from 'app/shared/components/challan-details/challan-details.component';
import {EditChallanComponent} from './edit-challan/edit-challan.component';
import { AddUpdateChallanComponent } from './edit-challan/add-update-challan/add-update-challan.component';

const routes: Routes = [
  {path: 'admin', component: AdminHomeComponent},
  {path: 'admin/challans', component: ChallanListComponent},
  {path: 'admin/challans/details/:id', component: ChallanDetailsComponent},
  {path: 'admin/challans/edit/:id', component: EditChallanComponent
  },
   {path: 'admin/challans/edit/:id/update', component: AddUpdateChallanComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AdminRoutingModule { }
