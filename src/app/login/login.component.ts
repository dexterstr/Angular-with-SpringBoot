import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeauthenticationService } from '../service/hardcodeauthentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username='tarun'
password=''
errormsg='InvalidCredentials'
InvalidLogin=false

//Router is dependency of login component
  //dependency injection 
  //constrcutor argument is created with variable router for Router
  constructor( private router : Router,
    private hardcodeauthenicationservice : HardcodeauthenticationService )
   { }

  ngOnInit() {
  }

handleLogin(){

// if(this.username==='tarun' && this.password==='dummy'){
if(this.hardcodeauthenicationservice.authenticate(this.username,this.password)){ 
  //redirect to welcome page with username
  //welcome/tarun
  this.router.navigate(['welcome',this.username])
  this.InvalidLogin=false

}
else {
  this.InvalidLogin=true
}
  
}

}
