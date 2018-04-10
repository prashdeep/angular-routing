import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  log(control){
    console.log("*************");
    console.log(control);
  }

  validate(profile){
    console.log('profile printed');
    console.log(profile);
  }
  ngOnInit() {
  }

}
