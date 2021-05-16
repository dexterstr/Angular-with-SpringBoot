import { Component, OnInit } from '@angular/core';


// all the  constructor argurments become a member of object of Todo class  
export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date 
    ){

    }
} 


@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.css']
})
export class ListtodosComponent implements OnInit {


//list of todo's in array

todos=[
  new Todo(1,'defining constructor',true,new Date()),
  new Todo(2,'his is it',false,new Date()),
  // {id:1,description:'learn to fly'},
  // {id:2,description:'learn to talk'}
]

  // todo={
  //   id:1,
  //   description:'learn to play'
  // } 
  constructor() { }

  ngOnInit() {
  }

}
