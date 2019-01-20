import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import {ToastaModule} from 'ngx-toasta';

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

@NgModule({
  declarations: [
    NavbarComponent,
    ChallansComponent,
    ChallanDetailsComponent,
    PageNotFoundComponent,
    ThreeSelectComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule,
    MDBBootstrapModule,
    ToastaModule.forRoot()
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
    InventryService
  ],
  exports: [
    ToastaModule,
    NavbarComponent,
    ChallansComponent,
    ChallanDetailsComponent,
    PageNotFoundComponent,
    ThreeSelectComponent
  ]
})
export class SharedModule { }
