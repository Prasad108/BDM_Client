import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import * as $ from 'jquery';

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
    FormsModule,
    SharedModule,
    UserModule,
    LoginModule,
    AdminModule,
    DashboardModule,
    AppRoutingModule,

  ],
  exports: [SharedModule, AdminModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
