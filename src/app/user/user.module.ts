import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserChalanListComponent } from './user-chalan-list/user-chalan-list.component';
import { UserRoutingModule } from './user-routing.module';
@NgModule({
  declarations: [UserHomeComponent, UserChalanListComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
