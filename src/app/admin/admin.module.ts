import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { ChallanListComponent } from './challan-list/challan-list.component';
import {SharedModule} from 'app/shared/shared.module';
@NgModule({
  declarations: [AdminHomeComponent, AdminMenuComponent, ChallanListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [AdminHomeComponent, AdminMenuComponent, ChallanListComponent]
})
export class AdminModule { }
