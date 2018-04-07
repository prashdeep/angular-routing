import { User } from './User';
import { Injectable } from '@angular/core';
import {HttpModule, Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers():Observable<User[]>{
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .map(res => {
      console.log(res.json());
      return res.json().map(item => {
        console.log(item);
        return new User(item.id, item.name, item.email, item.phone, item.website);
      });
    })

  }
}
