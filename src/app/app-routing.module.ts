import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { RegisterComponent } from '/register/register.component';

import { LoginComponent } from 'app/login/login/login.component';
import { HomeComponent } from 'app/dashboard/home/home.component';
import { UserHomeComponent} from 'app/user/user-home/user-home.component';
import { AdminHomeComponent} from 'app/admin/admin-home/admin-home.component';
import {SignUpComponent} from 'app/login//sign-up/sign-up.component';
import {ChallansComponent} from 'app/shared/components/challans/challans.component';
const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'user', component: UserHomeComponent},
    {path: 'admin', component: AdminHomeComponent},
    {path: 'admin/challans', component: ChallansComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signUp', component: SignUpComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
