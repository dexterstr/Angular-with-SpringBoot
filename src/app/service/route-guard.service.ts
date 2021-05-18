import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { HardcodeauthenticationService } from './hardcodeauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor( private router :Router,
    private hardcodeauthenticationService: HardcodeauthenticationService) { }


  //checks whether user is loggedin or not 
  // if logged in-returns true
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
if(this.hardcodeauthenticationService.isUserLoggedIn())

{
  this.router.navigate(['login']);

  return true;
  
}
else{
return false;  
}

}

}