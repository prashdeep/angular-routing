import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  template:`
    Name of the Persons is {{name | uppercase | lowercase}} <br/>
    Number of Students is {{students | number}} <br/>
    Ratings : {{rating | number:'2.2-3'}} <br/>
    Price is : {{price | currency:'USD':'true':'2.2-3'}} <br/>
    Date is : {{dateVar | date:'short'}}

  `,
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent  {

  constructor() { }

  name:string = 'pradeep';
  rating:number = 4.987456;
  students:number = 89562;
  price:number = 48.256;
  dateVar:Date =  new Date(2018, 5, 6);
}
