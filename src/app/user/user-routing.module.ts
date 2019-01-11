import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserChalanListComponent } from './user-chalan-list/user-chalan-list.component';

@NgModule({
    imports: [RouterModule.forChild([
          { path: 'user', component: UserHomeComponent },
          { path: 'user/challans', component: UserChalanListComponent}
        ]
    )],
    exports: [RouterModule]
})
export class UserRoutingModule{

}