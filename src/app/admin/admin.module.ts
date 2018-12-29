import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ChallansComponent } from './challans/challans.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';

@NgModule({
  declarations: [AdminHomeComponent, ChallansComponent, AdminMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [AdminHomeComponent, ChallansComponent, AdminMenuComponent]
})
export class AdminModule { }
