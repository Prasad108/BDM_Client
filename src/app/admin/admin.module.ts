import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';

@NgModule({
  declarations: [AdminHomeComponent, AdminMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [AdminHomeComponent, AdminMenuComponent]
})
export class AdminModule { }
