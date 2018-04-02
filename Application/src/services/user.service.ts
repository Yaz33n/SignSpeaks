import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';

@Injectable()
export class UserService{

    constructor(public http:Http){

    }
    //this method will return a observable which can be used to register a user via a post request
    registerUser( user : any){
        return this.http.post('https://sign-speaks.herokuapp.com/users', user  );  
    }
    //this method will return a observable that can be used to login a user
    loginUser( user : any){
        return this.http.post('https://sign-speaks.herokuapp.com/users/login', user  );  
    }


}