import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
