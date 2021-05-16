import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeauthenticationService {

  constructor() { }
  authenticate(username,password){
   
    console.log('before calling'+this.isUserLoggedIn());
if(username==='tarun' && password==='dummy'){
  //
  
  sessionStorage.setItem('authenticaterUser',username );
  console.log('after calling'+this.isUserLoggedIn());
  return true;
  }
    return false;
  }

  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticaterUser')
    return !(user=== null)
  }

}
