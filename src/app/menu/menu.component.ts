import { Component, OnInit } from '@angular/core';
import { HardcodeauthenticationService } from '../service/hardcodeauthentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // isUserLoggedIn : boolean =false;

  constructor(private hardcodeauthenicationservice: HardcodeauthenticationService) { }

  ngOnInit() {
    // this.isUserLoggedIn=this.hardcodeauthentication.isUserLoggedIn();
  }

}
