import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConstantsService} from './services/constants.service';
import {TokenStorageService} from './services/token-storage.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ConstantsService, TokenStorageService],
})
export class CoreModule { }
