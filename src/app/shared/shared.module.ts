import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule , DropdownModule, CarouselModule} from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import {ToastaModule} from 'ngx-toasta';
import { OrderModule } from 'ngx-order-pipe';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import {ConstantsService} from './services/constants.service';
import {TokenStorageService} from './services/token-storage.service';
import {ChallanService} from './services/challan.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChallansComponent } from './components/challans/challans.component';
import { RouterModule } from '@angular/router';
import {AuthService} from './services/auth.service';
import {AuthInterceptor, httpInterceptorProviders} from './services/auth-interceptor';
import { ChallanDetailsComponent } from './components/challan-details/challan-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {ShairedService } from './services/shaired.service';
import { CbDetailsService } from './services/cb-details.service';
import { UserService } from './services/user.service';
import { InventryService } from './services/inventry.service';
import { ThreeSelectComponent } from './components/three-select/three-select.component';
import { RequestNewBookService } from './services/request-new-book.service';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { UsersComponent } from './components/users/users.component';
import { CreateNewUserComponent } from './components/create-new-user/create-new-user.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ChallansComponent,
    ChallanDetailsComponent,
    PageNotFoundComponent,
    ThreeSelectComponent,
    AppHomeComponent,
    UsersComponent,
    CreateNewUserComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule.forRoot(),
    OrderModule,
    NgxChartsModule,
    DropdownModule.forRoot(),
    ToastaModule.forRoot(),
    LoadingBarHttpClientModule,
  ],
  providers: [
    ConstantsService,
    TokenStorageService,
    ChallanService,
    AuthService,
    AuthInterceptor,
    httpInterceptorProviders,
    ShairedService,
    CbDetailsService,
    UserService,
    InventryService,
    RequestNewBookService
  ],
  exports: [
    ToastaModule,
    NavbarComponent,
    ChallansComponent,
    ChallanDetailsComponent,
    PageNotFoundComponent,
    ThreeSelectComponent,
    UsersComponent,
    AppHomeComponent,
    CarouselModule,
    NgxChartsModule,
    OrderModule,
    LoadingBarHttpClientModule
  ]
})
export class SharedModule { }
