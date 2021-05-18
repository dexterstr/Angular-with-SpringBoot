import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListtodosComponent } from './listtodos/listtodos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',component:LoginComponent},//activate these components when user gets logged in
{path:'login',component:LoginComponent},
{ path:'welcome/:name',component:WelcomeComponent,canActivate:[RouteGuardService]},
{path:'todos',component:ListtodosComponent,canActivate:[RouteGuardService]},
{path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
{path:'**',component:ErrorComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
