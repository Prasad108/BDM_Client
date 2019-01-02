import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { ChallanListComponent } from './challan-list/challan-list.component';
import {SharedModule} from 'app/shared/shared.module';
import { EditChallanComponent } from './edit-challan/edit-challan.component';
import {AdminRoutingModule} from './admin-routing.module';
@NgModule({
  declarations: [AdminHomeComponent, AdminMenuComponent, ChallanListComponent, EditChallanComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule
  ],
  exports: [AdminHomeComponent, AdminMenuComponent, ChallanListComponent]
})
export class AdminModule { }
