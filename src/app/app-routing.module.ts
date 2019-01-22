import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { RegisterComponent } from '/register/register.component';

import { LoginComponent } from 'app/login/login/login.component';
import { HomeComponent } from 'app/dashboard/home/home.component';
import { UserHomeComponent} from 'app/user/user-home/user-home.component';
import {SignUpComponent} from 'app/login//sign-up/sign-up.component';
import {ChallansComponent} from 'app/shared/components/challans/challans.component';
import {PageNotFoundComponent} from 'app/shared/components/page-not-found/page-not-found.component';


const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
    {path: 'superAdmin', loadChildren: './superadmin/superadmin.module#SuperadminModule'},
    {path: 'user', loadChildren: './user/user.module#UserModule'},
    {path: 'login', component: LoginComponent},
    {path: 'signUp', component: SignUpComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
