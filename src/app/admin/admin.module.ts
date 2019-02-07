import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { ChallanListComponent } from './challan-list/challan-list.component';
import {SharedModule} from 'app/shared/shared.module';
import { EditChallanComponent } from './edit-challan/edit-challan.component';
import {AdminRoutingModule} from './admin-routing.module';
import { AddUpdateChallanComponent } from './edit-challan/add-update-challan/add-update-challan.component';
import { NewChallanComponent } from './challan-list/new-challan/new-challan.component';
import { InventryComponent } from './inventry/inventry.component';
import { UpdateInventryComponent } from './inventry/update-inventry/update-inventry.component';
import { AddNewBookToChallanComponent } from './edit-challan/add-new-book-to-challan/add-new-book-to-challan.component';
import { RequestNewBookComponent } from './inventry/request-new-book/request-new-book.component';
import { SettleChallanComponent } from './edit-challan/settle-challan/settle-challan.component';
import { UsersComponent } from './users/users.component';
@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminMenuComponent,
    ChallanListComponent,
    EditChallanComponent,
    AddUpdateChallanComponent,
    NewChallanComponent,
    InventryComponent,
    UpdateInventryComponent,
    AddNewBookToChallanComponent,
    RequestNewBookComponent,
    SettleChallanComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule
  ],
  exports: [AdminHomeComponent, AdminMenuComponent, ChallanListComponent]
})
export class AdminModule { }
