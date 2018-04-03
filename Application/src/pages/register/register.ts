import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/user.service';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  //this is the user JSON object
  // user= {
  //   "name":null,
  //   "email": null,
  //   "password": null,
  //   "cpassword":null,
  //   "phoneNumber": null
  // }

  user= {
    "name":"null",
    "email": "null@gamil.com",
    "password": "123456",
    "cpassword":"123456",
    "phoneNumber": "0000000000"
  }

 
  constructor(public navCtrl: NavController, public navParams: NavParams ,public userService:UserService ) {
  
  }


   onSave(){
     
    if(this.user.name ==null || this.user.email ==null || this.user.password ==null || this.user.cpassword ==null || this.user.phoneNumber ==null){
      alert("All fields must be filled!");   
    }else{
      if(this.user.password!=this.user.cpassword){
        alert("Password Mismatch");
      }else{
        alert("Sucessfully Registered :)"); 
        //subscribing to the observable retured to send a post request  
        this.userService.registerUser(this.user).subscribe(
          (response) => {
            console.log(" Headers:"+ response.headers);
          },
          (error)=>{
            console.log(error);
            alert("ERROR");  
          }
          
        );
        this.goLoginPage();
      }
    }
  

  }
  //=== === === === === === === === === PAGE NAVIGATION === === === === === === === === === === ===

  //navigate to the deviceInfo page
  goLoginPage() {
    this.navCtrl.push(LoginPage);
  }

  //=== === === === === === === === === === === === === === === === === === === === === === === ===


  
  ionViewDidLoad() {
  }
}
