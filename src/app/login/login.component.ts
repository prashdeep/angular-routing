import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {  } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string;
  id:number;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe(p => this.name = p['name']);
    this.activatedRoute.params.subscribe(p=> this.id = p['id']);
  }

  submit(){
    this.router.navigate(['dashboard', this.id, this.name]);
  }

}
