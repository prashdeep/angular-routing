import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  name:string="Hexaware";
  color:string = "lightblue";
  divWidth:string = "50px";
  divHeight:string = "50px";
  email:string="pradeep@gmail.com";
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
    console.log(user);
    this.router.navigate(['login',user.id,user.name]);
  }

  log($event){
    console.log("Came inside the log method....");
    console.log($event.target.value);
  }

  keyPress(email){
    console.log(email);
    
  }

  bind(){
    console.log("Updated value of email is "+this.email);
  }

  ngOnInit() {
  }

}
