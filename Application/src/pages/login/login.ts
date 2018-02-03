import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController) {
    //this will diabale the side menue in the login screen
    this.menu.enable(false);
  }

  //this method will chage the page to the RegisterPage
  goToRegisterPage(){   
    this.navCtrl.push(RegisterPage);    
  }

  //this method will chage the page to the RegisterPage
  goToHomePage(){   
    this.navCtrl.push(HomePage);    
  }


}
