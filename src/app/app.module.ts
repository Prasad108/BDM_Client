import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import * as $ from "jquery";

import { AppComponent } from './app.component';

import {UserModule} from 'app/user/user.module';
import {LoginModule} from 'app/login/login.module';
import { AdminModule } from 'app/admin/admin.module';
import {DashboardModule} from 'app/dashboard/dashboard.module';
import {SharedModule} from 'app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    UserModule,
    LoginModule,
    AdminModule,
    DashboardModule,
  ],
  exports: [SharedModule, AdminModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
