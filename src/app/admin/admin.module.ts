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
import { AddNewBookToChallanComponent } from './edit-challan/add-new-book-to-challan/add-new-book-to-challan.component';
import { RequestNewBookComponent } from './inventry/request-new-book/request-new-book.component';
import { SettleChallanComponent } from './edit-challan/settle-challan/settle-challan.component';
import { UsersComponent } from './users/users.component';
import { BookRequestsComponent } from './inventry/book-requests/book-requests.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InwardRegisterComponent } from './inventry/inward-register/inward-register.component';
import { EditInwardChallanComponent } from './inventry/inward-register/edit-inward-challan/edit-inward-challan.component';
import { AddNewBookToInwardChallanComponent } from './inventry/inward-register/edit-inward-challan/add-new-book-to-inward-challan/add-new-book-to-inward-challan.component';
import { UpdateInwardChallanCbDetailsComponent } from './inventry/inward-register/edit-inward-challan/update-inward-challan-cb-details/update-inward-challan-cb-details.component';
import { SettleInwardChallanComponent } from './inventry/inward-register/edit-inward-challan/settle-inward-challan/settle-inward-challan.component';
import { StockComponent } from './inventry/stock/stock.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminMenuComponent,
    ChallanListComponent,
    EditChallanComponent,
    AddUpdateChallanComponent,
    NewChallanComponent,
    AddNewBookToChallanComponent,
    RequestNewBookComponent,
    SettleChallanComponent,
    UsersComponent,
    BookRequestsComponent,
    InwardRegisterComponent,
    EditInwardChallanComponent,
    AddNewBookToInwardChallanComponent,
    UpdateInwardChallanCbDetailsComponent,
    SettleInwardChallanComponent,
    StockComponent,
    ReportsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule,
    MDBBootstrapModule
  ],
  exports: [AdminHomeComponent, AdminMenuComponent, ChallanListComponent]
})
export class AdminModule { }
