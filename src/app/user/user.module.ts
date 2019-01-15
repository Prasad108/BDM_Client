import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserChalanListComponent } from './user-chalan-list/user-chalan-list.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [UserHomeComponent, UserChalanListComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
