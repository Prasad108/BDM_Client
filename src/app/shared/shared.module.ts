import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule , DropdownModule, CarouselModule} from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastaModule} from 'ngx-toasta';
import { OrderModule } from 'ngx-order-pipe';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
// import { NgxDaterangepickerMd } from '';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, SatDatepickerModule } from 'saturn-datepicker';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DemoMaterialModule} from 'app/shared/material.module';
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
import { ReportService } from './services/report.service';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { UsersComponent } from './components/users/users.component';
import { CreateNewUserComponent } from './components/create-new-user/create-new-user.component';
import { ChallanSummaryComponent } from './components/challan-summary/challan-summary.component';
import { CustomDatesRangeComponent } from 'app/shared/components/custom-dates-range/custom-dates-range.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ChallansComponent,
    ChallanDetailsComponent,
    PageNotFoundComponent,
    ThreeSelectComponent,
    AppHomeComponent,
    CustomDatesRangeComponent,
    UsersComponent,
    CreateNewUserComponent,
    ChallanSummaryComponent,
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
    ReactiveFormsModule,
    // NgxDaterangepickerMd.forRoot()
    DemoMaterialModule,
    SatDatepickerModule
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
    RequestNewBookService,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    ReportService
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
    ChallanSummaryComponent,
    CarouselModule,
    NgxChartsModule,
    OrderModule,
    LoadingBarHttpClientModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    CustomDatesRangeComponent,
    SatDatepickerModule
  ]
})
export class SharedModule { }
