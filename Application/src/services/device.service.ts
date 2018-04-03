import { Injectable } from '@angular/core';
import { Headers,Http } from '@angular/http';

@Injectable()
export class DeviceService{

    /*
    this static variable will store the token recieved from the server when user logs in 
    this variable is incapuslated to improve security
    */
    private static jwtToken:any;

    //Device Service class constructor
    constructor(public http:Http){

    }
    
    //======== ======== ======== ========
    /**
     * this method will return a observable which can be used to register a user via a post request
     * @param data : a JSON object contsining the message/data packet recieved from the glove via bluethooth
     */
    sendData( data : any){
        //for debugging perposes
        console.log("TOKEN");
        console.log( DeviceService.jwtToken);

        //For SECURE communication with rest api private routes , the JWT token must be passed in the headers when making a request to the server
        //making a new header object with the  JWT token
        const headers = new Headers({
            //setting the jwt token as the token recieved from the server when the user logs in
            "x-auth": DeviceService.jwtToken
        });
        //returning a subcribable observable 
        return this.http.post('https://sign-speaks.herokuapp.com/api/gtt', data ,{ headers: headers} );  
    }

    //======== ======== ======== ========

    //getters and setters to securly set and acces the jwt token
    public static setJwtToken(jwtToken){
        DeviceService.jwtToken=jwtToken;
    }
    public static getJwtToken(){
        return DeviceService.jwtToken;
    }
   
}