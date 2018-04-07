import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../User';



@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  users:User[];
  constructor(private userService: UserService) {}
   

  ngOnInit() {
   this.userService.getUsers().subscribe(values => this.users = values);
   console.log(this.users);
  }

}
