import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


//this @component is like annotation in java
//in angular is it called DECORATOR
//under these are called attributes
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //member variables
message='hello'
msg : string='this variable is of string type'
// even if you dont mention datatype it detects datatype
//if you try message =5 it will show error.


// this is to grab username who logged in to display as welcome username 
name=''

//ActivatedRoute
  constructor(private route:ActivatedRoute
    ) { }

  ngOnInit() {
    console.log(this.message)
    //this gets username after login component verifies details
  this.name=this.route.snapshot.params['name'];
    // console.log(this.route.snapshot.params['name']) 

  }

}
