import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {UserModule} from 'app/user/user.module';
import {LoginModule} from 'app/login/login.module';
import { AdminModule } from 'app/admin/admin.module';
import {DashboardModule} from 'app/dashboard/dashboard.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    SharedModule,
    UserModule,
    LoginModule,
    AdminModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
