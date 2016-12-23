import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }       from './login/login.component';
import { UserComponent }        from './users/user.component';

const routes: Routes =[
    { path: 'login',  component: LoginComponent },
    { path: 'user',  component: UserComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
