import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { RegisterComponent } from '/register/register.component';

import { LoginComponent } from 'app/login/login/login.component';
import { HomeComponent } from 'app/dashboard/home/home.component';
import { UserHomeComponent} from 'app/user/user-home/user-home.component';
import { AdminHomeComponent} from 'app/admin/admin-home/admin-home.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserHomeComponent
    },
    {
        path: 'admin',
        component: AdminHomeComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
