import { User } from './../User';
import { OService } from './Oservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor(private service: OService) { }

  users:User[];
  ngOnInit() {
    //this.service.getUsers().subscribe(items => this.users = items);
    this.service.getAllUsers().subscribe(items => this.users = items);
  }

  handleClick(){
    console.log('came inside the handle Click method..');
    this.service.createUser();
  }

}
