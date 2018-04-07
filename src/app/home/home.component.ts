import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  users=[
    {
      "id":1,
      "name":"Pradeep",
      "age":32,
      "location":"Bangalore"
    },
    {
      "id":2,
      "name":"Raju",
      "age":28,
      "location":"Chennai"
    },
    {
      "id":3,
      "name":"Naveen",
      "age":33,
      "location":"Mumbai"
    }

  ]

  login(user){
    console.log("came inside the login function!! "+user.name);
    this.router.navigate(['login',user.id,user.name]);
  }

  ngOnInit() {
  }

}
