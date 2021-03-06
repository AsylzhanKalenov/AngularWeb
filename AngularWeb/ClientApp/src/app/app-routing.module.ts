import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserlistComponent } from './userlist/userlist.component';
import { CheckUserComponent } from './userlist/check-user/check-user.component';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    {
        path: '',
        component: UserlistComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'check-user/:id/:mail',
        component: CheckUserComponent,
        canActivate: [AuthGuard]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
