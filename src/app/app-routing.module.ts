import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListtodosComponent } from './listtodos/listtodos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
{path:'login',component:LoginComponent},
{ path:'welcome/:name',component:WelcomeComponent},
{path:'todos',component:ListtodosComponent},
{path:'logout',component:LogoutComponent},
{path:'**',component:ErrorComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
