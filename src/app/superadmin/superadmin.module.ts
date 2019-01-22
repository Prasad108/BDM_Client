import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperadminRoutingModule } from './superadmin-routing.module';
import { SuperadminHomeComponent } from './superadmin-home/superadmin-home.component';

@NgModule({
  declarations: [SuperadminHomeComponent],
  imports: [
    CommonModule,
    SuperadminRoutingModule
  ],
  exports: [SuperadminHomeComponent]
})
export class SuperadminModule { }
