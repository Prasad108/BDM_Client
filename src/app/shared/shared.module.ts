import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConstantsService} from './services/constants.service';
import {TokenStorageService} from './services/token-storage.service';
import {ChallanService} from './services/challan.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChallansComponent } from './components/challans/challans.component';
import { RouterModule } from '@angular/router';
import {AuthService} from './services/auth.service';
import {AuthInterceptor, httpInterceptorProviders} from './services/auth-interceptor';
import { ChallanDetailsComponent } from './components/challan-details/challan-details.component';

@NgModule({
  declarations: [NavbarComponent, ChallansComponent, ChallanDetailsComponent],
  imports: [
    CommonModule, RouterModule
  ],
  providers: [ConstantsService, TokenStorageService, ChallanService, AuthService, AuthInterceptor, httpInterceptorProviders],
  exports: [NavbarComponent, ChallansComponent, ChallanDetailsComponent]
})
export class SharedModule { }
