import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

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

  ngOnDestroy(){
    
  }

}
