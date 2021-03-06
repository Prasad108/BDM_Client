import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminRoutingModule } from './superadmin-routing.module';
import {SharedModule} from 'app/shared/shared.module';
import { SuperadminHomeComponent } from './superadmin-home/superadmin-home.component';
import { NewBookRequestsComponent } from './new-book-requests/new-book-requests.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { CentersComponent } from './centers/centers.component';
import { CreateNewCenterComponent } from './centers/create-new-center/create-new-center.component';
import { AddBookNameComponent } from './add-book-name/add-book-name.component';
import { AddBookTypeComponent } from './add-book-type/add-book-type.component';
import { AddLanguageComponent } from './add-language/add-language.component';
import { AddNewBookComponent } from './add-new-book/add-new-book.component';

@NgModule({
  declarations:
    [
      SuperadminHomeComponent,
      NewBookRequestsComponent,
      CentersComponent,
      CreateNewCenterComponent,
      AddBookNameComponent,
      AddBookTypeComponent,
      AddLanguageComponent,
      AddNewBookComponent
    ],
  imports: [
    CommonModule,
    SuperadminRoutingModule,
    SharedModule,
    MDBBootstrapModule,
    FormsModule
  ]
})
export class SuperadminModule { }
