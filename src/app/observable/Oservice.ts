import { User } from './../User';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OService {

    constructor(private http: Http){}

    getUsers():Observable<User[]>{
        return this.http.get('https://jsonplaceholder.typicode.com/users')
        .map(response => {
            console.log(response);
            return response.json().map(item =>{
                return new User(item.id, item.name, item.email, item.phone, item.website); 
            });
        });     
    }

    createUser():void{
        let userT:User = new User(29, "Pradeep", "pradeep@gmail.com", "34234234", "cccl.com");
         this.http.post('https://jsonplaceholder.typicode.com/users', JSON.stringify(userT))
        .subscribe(response => {
            console.log(response.json());
        })
    }

}