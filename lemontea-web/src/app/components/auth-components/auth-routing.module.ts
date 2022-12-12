import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent , data: {link: 'login'}},
    {path: 'sign-up', component: LoginComponent, data: {link: 'sign-up'}}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class AuthRoutingModule {
}