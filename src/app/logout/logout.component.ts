import { Component, OnInit } from '@angular/core';
import { HardcodeauthenticationService } from '../service/hardcodeauthentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private HardcodeauthenticationService : HardcodeauthenticationService) { }

  ngOnInit() {

     this.HardcodeauthenticationService.logout();

  }

}
