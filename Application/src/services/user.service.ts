import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService{

    constructor(public http:Http){

    }

    //======== ======== ======== ========
    
    /**
     * this method will return a observable which can be used to register a user via a post request
     * @param user : A user JSON object with username , email , password and phone number
    */
    registerUser( user : any){
        return this.http.post('https://sign-speaks.herokuapp.com/users', user  );  
    }
    
    //======== ======== ======== ========

    /**
     * this method will return a observable that can be used to login a user
     * @param user : A user JSON object with email and password
    */
    loginUser( user : any){
        return this.http.post('https://sign-speaks.herokuapp.com/users/login', user  );  
    }


}