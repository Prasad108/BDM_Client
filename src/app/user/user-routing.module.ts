import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserChalanListComponent } from './user-chalan-list/user-chalan-list.component';
import { ChallanDetailsComponent } from 'app/shared/components/challan-details/challan-details.component';

@NgModule({
    imports: [RouterModule.forChild([
          { path: 'user', component: UserHomeComponent },
          { path: 'user/challans', component: UserChalanListComponent},
          {path: 'user/challans/details/:id', component: ChallanDetailsComponent}
        ]
    )],
    exports: [RouterModule]
})
export class UserRoutingModule{

}