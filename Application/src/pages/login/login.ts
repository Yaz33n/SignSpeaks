import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { MenuController } from 'ionic-angular';
import { UserService } from '../../services/user.service';
import { DeviceService } from '../../services/device.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //this variable will store the login button pressed status
  isLoginPressed:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController,public userService:UserService,public deviceService:DeviceService) {
    //this will diabale the side menu in the login screen
    this.menu.enable(false);
    this.isLoginPressed=false;
  }

  //This is the user JSON object that will be passed to the onLogin Method
  user={
    "email": "wdevon99@gmail.com",
    "password": "123456"
  }
  // user={
  //   'email' : null,
  //   'password' : null
  // }

  //=== === === === === === === === === ===  LOGIN METHOD == === === === === === === === === === ===
  onLogin(){
    console.log("Login Pressed");
    this.isLoginPressed=true;
    //checking if the textfield and password fields are empty or not
    if(this.user.password==null || this.user.email==null){
      //alert
      alert("All fields must be filled!");
    }else{
      //subscribe to the observable returned to send a post request to login a user
      this.userService.loginUser(this.user).subscribe(
        (response)=>{
          //getting the body of the response
          let body= JSON.parse(response._body);
          //getting the login status from the response body
          let loginStatus = body.auth;
          //getting the JWT token from the response body
          let token=body.token;
          //initializing the JWT Token - This token is used to securly autenticate with the rest api
          DeviceService.setJwtToken(token);
          //for debugging
          console.log(token);

          //checking the staus to check if the user credentials are valid
          if(loginStatus){
            //changing the page to the home page
            this.goToHomePage();
            //alerting the user welcome message
            alert(body.message);    

          }

        },
        (error)=>{
          //displaying the login failed alert
          alert("Login Failed , Invalid Credentials");
          this.isLoginPressed=false;
          console.log("ERROR :");
          console.log(error);
        }
      );

    }
  }

  //== === === === === === === === === === === == === === === === === === === === === === == === ===
  onForgetPassword(){
    alert("This service is unavailable in the moment");
  }
  //== === === === === === === === === === === == === === === === === === === === === === == === ===

  saveJwtToken(){

  }

  //=== === === === === === === === === PAGE NAVIGATION === === === === === === === === === === ===

  //this method will chage the page to the RegisterPage
  goToHomePage(){   
    this.navCtrl.push(HomePage);    
  }
  //this method will chage the page to the RegisterPage
  goToRegisterPage(){   
    this.navCtrl.push(RegisterPage);    
  }


  //=== === === === === === === === === === === === === === === === === === === === === === === ===


}
