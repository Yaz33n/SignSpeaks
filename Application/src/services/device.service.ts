import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';

@Injectable()
export class DeviceService{

    static jwtToken;

    constructor(public http:Http){

    }
    
    //this method will return a observable which can be used to register a user via a post request
    sendData( data : any){
        
        console.log("LALALALALALAL");
        console.log( DeviceService.jwtToken);

        const headers = new Headers({
            // "x-auth": DeviceService.jwtToken
        });
        return this.http.post('https://sign-speaks.herokuapp.com/api/gtt', data ,{ headers: headers} );  
    }
   


}