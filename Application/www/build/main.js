webpackJsonp([3],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let RegisterPage = class RegisterPage {
    constructor(navCtrl, navParams, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        //this is the user JSON object
        // user= {
        //   "name":null,
        //   "email": null,
        //   "password": null,
        //   "cpassword":null,
        //   "phoneNumber": null
        // }
        this.user = {
            "name": "null",
            "email": "null@gamil.com",
            "password": "123456",
            "cpassword": "123456",
            "phoneNumber": "0000000000"
        };
    }
    onSave() {
        if (this.user.name == null || this.user.email == null || this.user.password == null || this.user.cpassword == null || this.user.phoneNumber == null) {
            alert("All fields must be filled!");
        }
        else {
            if (this.user.password != this.user.cpassword) {
                alert("Password Mismatch");
            }
            else {
                alert("Sucessfully Registered :)");
                //subscribing to the observable retured to send a post request  
                this.userService.registerUser(this.user).subscribe((response) => {
                    console.log(" Headers:" + response.headers);
                }, (error) => {
                    console.log(error);
                    alert("ERROR");
                });
                this.goLoginPage();
            }
        }
    }
    //=== === === === === === === === === PAGE NAVIGATION === === === === === === === === === === ===
    //navigate to the deviceInfo page
    goLoginPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    }
    //=== === === === === === === === === === === === === === === === === === === === === === === ===
    ionViewDidLoad() {
    }
};
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/devon/Desktop/SignSpeaks/Application/src/pages/register/register.html"*/'\n<ion-content  padding class="background" >\n  \n  <div>\n      <div text-center class="logoWhiteContainer">\n          <img  src="assets/imgs/whitelogo.png"  >\n    </div>\n    <ion-list text-center>\n        <ion-item class="ionItemLogin">\n          <ion-input type="text" placeholder="Username" [(ngModel)]="user.name" required></ion-input>\n        </ion-item>\n        <ion-item class="ionItemLogin">\n          <ion-input type="text" placeholder="Email" [(ngModel)]="user.email" required></ion-input>\n        </ion-item>\n        <ion-item class="ionItemLogin">\n          <ion-input type="password" placeholder="Password" [(ngModel)]="user.password" [minlength]="6" required></ion-input>\n        </ion-item>\n        <ion-item class="ionItemLogin">\n            <ion-input type="password" placeholder="Confirm Password" [(ngModel)]="user.cpassword" [minlength]="6" required></ion-input>\n        </ion-item>\n        <ion-item class="ionItemLogin">\n          <ion-input type="number" placeholder="Mobile Number" [(ngModel)]="user.phoneNumber" [minlength]="10" required></ion-input>\n      </ion-item>\n      \n    </ion-list>\n    \n  \n    <div text-center>\n      \n      <button ion-button icon-left color="blueLight" (click)="onSave()">\n        <ion-icon name="key" > </ion-icon>\n        Register\n      </button>\n      <br>\n      <br>\n    </div>\n    <div text-center>\n        <a color="light" (click)="goLoginPage()" >Login</a>\n    </div>\n    \n  </div>\n\n  \n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/devon/Desktop/SignSpeaks/Application/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/convertor/convertor.module": [
		280,
		2
	],
	"../pages/login/login.module": [
		281,
		1
	],
	"../pages/register/register.module": [
		282,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_convertor_convertor__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_bluetooth_serial__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_text_to_speech__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_speech_recognition__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_device_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_convertor_convertor__["a" /* ConvertorPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/convertor/convertor.module#ConvertorPageModule', name: 'ConvertorPage', segment: 'convertor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_convertor_convertor__["a" /* ConvertorPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_text_to_speech__["a" /* TextToSpeech */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
            __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_14__services_device_service__["a" /* DeviceService */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_convertor_convertor__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let MyApp = class MyApp {
    constructor(platform, statusBar, splashScreen, alertCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Device Info', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'ios-bluetooth' },
            { title: 'Convertor', component: __WEBPACK_IMPORTED_MODULE_6__pages_convertor_convertor__["a" /* ConvertorPage */], icon: 'ios-analytics-outline' }
        ];
    }
    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
    //this method will log the user out
    logOut() {
        let alert = this.alertCtrl.create({
            title: 'Log out',
            message: 'Do you really want to Log Out?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Log Out',
                    handler: () => {
                        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
                        console.log("Logged out!");
                    }
                }
            ]
        });
        alert.present();
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/devon/Desktop/SignSpeaks/Application/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header >\n    <ion-toolbar >\n      <!-- <ion-title >Sign Speak</ion-title> -->\n      <div text-center class="logoWhiteContainerInMenu">\n        <img  src="assets/imgs/whitelogo.png">\n      </div>\n      <!-- <div>\n          <img  src="assets/imgs/profilePic.png" class="profilePic">\n      </div> -->\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon name="{{ p.icon }}"></ion-icon> {{p.title}}\n      </button>\n      <button menuClose ion-item (click)="logOut()">\n          <ion-icon name="power"></ion-icon> Log Out\n        </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>'/*ion-inline-end:"/Users/devon/Desktop/SignSpeaks/Application/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__convertor_convertor__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let HomePage = class HomePage {
    //=== === === === === === === === === === === === === === === === === === === === === === === ===
    constructor(navCtrl, alertCtrl, bluetoothSerial) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.bluetoothSerial = bluetoothSerial;
        //this is used with the connection to a device is SUCCESSFULL
        this.success = (data) => {
            //this method will set the connection stus to true and update ui
            this.setTrueValConnectStatus();
            alert(data);
            alert("Device connected :)");
        };
        //this is used with the connection to a device FAILS
        this.fail = (error) => {
            //this method will set the connection stus to false and update ui
            this.setFalseValConnectStatus();
            alert(error);
            alert("Device failed to connect :(");
        };
        //enabling the blutooth serial for communication
        bluetoothSerial.enable();
    }
    //=== === === === === === === === === === === === === === === === === === === === === === === ===
    //this method will scann the available bluetooth devices
    startScanning() {
        this.pairedDevices = null;
        this.unpairedDevices = null;
        this.gettingDevices = true;
        this.bluetoothSerial.discoverUnpaired().then((success) => {
            this.unpairedDevices = success;
            this.gettingDevices = false;
            //if discoverUnpaired is succesfull the below statements will run
            success.forEach(element => {
                // alert(element.name);
            });
        }, 
        //if discoverUnpaired Fails ,the below statements will run
        (err) => {
            console.log(err);
        });
        //listing all the devices
        this.bluetoothSerial.list().then((success) => {
            this.pairedDevices = success;
        }, (err) => {
        });
    }
    //=== === === === === === === === === === === === === === === === === === === === === === === ===
    //this method is used to select a device and connect to it
    selectDevice(address) {
        //confirmation alert to CONNECT
        let alert = this.alertCtrl.create({
            title: 'Connect',
            message: 'Do you want to connect with?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Connect',
                    handler: () => {
                        //if connect is pressed : the phone will try to connect to the blutooth device
                        this.bluetoothSerial.connect(address).subscribe(this.success, this.fail);
                        //this method will set the connection stus to true and update ui
                        this.setTrueValConnectStatus();
                    }
                }
            ]
        });
        alert.present();
    }
    //=== === === === === === === === === === === === === === === === === === === === === === === ===
    //this method is used to DISCONNECT a selected device 
    disconnect() {
        //confirmation alert to disconnect
        let alert = this.alertCtrl.create({
            title: 'Disconnect?',
            message: 'Do you want to Disconnect?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Disconnect',
                    handler: () => {
                        //disconnecting the device
                        this.bluetoothSerial.disconnect();
                        this.setFalseValConnectStatus();
                        console.log("disconnected!");
                    }
                }
            ]
        });
        alert.present();
    }
    //=== === === === === === === === === === === === === === === === === === === === === === === ===
    //this method will SEND data via the bluethooth serial
    sendDataToBluetooth() {
        this.bluetoothSerial.write('Hello aathif anna');
    }
    //this method will READ data via the bluethooth serial
    readDataToBluetooth() {
        var dataVal = this.bluetoothSerial.read();
        dataVal.then(function (result) {
            alert("DataVal :" + result);
        });
    }
    /*
    subscriberReadDataToBluetooth(){
      // the success callback is called whenever data is received
      this.bluetoothSerialObj.subscribe('\n', function (data) {
      console.log(data);
      alert("dataStringSunscribed :"+data)
      this.dataStringSunscribed=data;
      });
    }
    */
    //=== === === === === === === === === === === === === === === === === === === === === === === ===
    //navigate to the convertor page
    goToConvertorPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__convertor_convertor__["a" /* ConvertorPage */], {
            bluetoothSerialObj: this.bluetoothSerial,
            connectionStatus: this.connectionStatus
        });
    }
    //=== === === === === === === === === === === === === === === === === === === === === === === ===
    //this method will set the connection stus to true 
    setTrueValConnectStatus() {
        this.connectionStatus = true;
        console.log(this.connectionStatus);
    }
    //this method will set the connection stus to false 
    setFalseValConnectStatus() {
        this.connectionStatus = false;
        console.log(this.connectionStatus);
    }
};
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/devon/Desktop/SignSpeaks/Application/src/pages/home/home.html"*/'<ion-header >\n  <ion-navbar >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Device Info</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  text-center>\n  <div class="gloveImgContainer">\n    <img  src="assets/imgs/glove.png" class="gloveImg">\n    <p > Device Status :\n      <!-- \n        Displaying the device connected status bases on the connectionStatus boolean\n        this will show the user if the device is connected or not very clearly and make the user experice and HCl better \n      -->\n      <b [hidden]=\'!connectionStatus\' class="greenClass"> CONNECTED</b> \n      <b [hidden]=\'connectionStatus\' class="redClass"> DISCONNECTED</b> \n    </p>\n  </div>\n\n  <ion-list padding >\n    <div [hidden]=\'connectionStatus\' >\n        <p>Press the scan button to find available gloves </p>\n        <button ion-button color="secondary"  (click)="startScanning()">scan</button>\n    </div>\n    \n    <button ion-button color="danger" [hidden]=\'!connectionStatus\' (click)="disconnect()">Disconnect</button>\n    <ion-list-header>\n      availlable Devices\n    </ion-list-header>\n    <ion-item *ngFor=\'let device of unpairedDevices\'>\n      <!-- listing all the available devicles using a ngFor loop -->\n      <span (click)="selectDevice(device.address)" text-center>\n        {{device.name}}\n      </span>\n    </ion-item>\n    <ion-spinner name="crescent" *ngIf="gettingDevices"></ion-spinner>\n  </ion-list>\n  \n  <ion-footer>\n      <button ion-button color="secondary" padding [hidden]=\'!connectionStatus\' (click)="goToConvertorPage()">Open Sign Speak Convertor</button>      \n  </ion-footer>\n  \n  <!-- testing buttons -->\n  <!-- <button ion-button (click)="sendDataToBluetooth()"> Send Data </button>\n  <button ion-button (click)="readDataToBluetooth()"> Read Data </button>\n  <button ion-button (click)="readDataToBluetooth()"> Read Data </button>\n  <button ion-button (click)="setTrueValConnectStatus()">Set true </button>\n  <button ion-button (click)="setFalseValConnectStatus()">Set False </button> -->\n  <!-- testing buttons -->\n\n</ion-content>\n\n\n\n\n\n<!-- <button ion-button secondary menuToggle>Toggle Menu</button> -->'/*ion-inline-end:"/Users/devon/Desktop/SignSpeaks/Application/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_bluetooth_serial__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_text_to_speech__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_speech_recognition__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_device_service__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







let ConvertorPage = class ConvertorPage {
    constructor(deviceService, navCtrl, navParams, bluetoothSerial, textToSpeech, speechRecognition) {
        this.deviceService = deviceService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bluetoothSerial = bluetoothSerial;
        this.textToSpeech = textToSpeech;
        this.speechRecognition = speechRecognition;
        //this variable will save true of flase based on the sound on off toggle
        this.isSoundOn = true;
        //this variable will store the connection status - If Connected to device or not
        this.connectionStatus = false;
        //this variable will store if the user is subcribed to bluetooth serial or not
        this.isSubscribedToBluetooth = false;
        //this variable will store the message from the bluetotth serial 
        this.msgFromGlove = "Message from glove";
        //Getting the data passed from the previous page
        this.bluetoothSerial = navParams.get('bluetoothSerialObj');
        this.connectionStatus = navParams.get('connectionStatus');
        //ERROR DUE TO THIS in the browser !!! But it works in real device
        //this.subscribeDataFromBluetooth(); 
    }
    //=== === === === === ===  REST API CALLS === === === === === ==== === === ==== === === ===
    /**
     * This method will make a Rest api call to get the correct word for the bluetoothPacket sent via a post request
     * @param bluetoothPacket : A JSON object containg the data recieved from the glove via bluetooth
     */
    onDataRecieved(bluetoothPacket) {
        this.deviceService.sendData(bluetoothPacket).subscribe((response) => {
            console.log(response);
            let body = JSON.parse(response._body);
            let message = body.word;
            console.log("MESSAGE=>");
            console.log(message);
            if (!message) {
                alert(body.error);
            }
            else {
                alert(message);
            }
            this.msgFromGlove = message;
        }, (error) => {
            console.log(error);
        });
    }
    //=== === === === === ===  TEXT TO SPEECH AND SPEECH TO TEXT METODS === === === === === ===
    /**
     * this method will convert TEXT to SPEECH and play it if no exceptions are thrown
    */
    sayText() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.textToSpeech.speak(this.msgFromGlove);
                console.log("Success");
            }
            catch (error) {
                console.log("ERROR :" + error);
            }
        });
    }
    // ------------------ SPEECH to TEXT ------------------
    //checking is speech recognition is Available on the device
    isSpeechSupported() {
        return __awaiter(this, void 0, void 0, function* () {
            const isAvailable = yield this.speechRecognition.isRecognitionAvailable();
            console.log(isAvailable);
            return isAvailable;
        });
    }
    //this method will request to use the device speech recognition features
    getPermission() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const permission = yield this.speechRecognition.requestPermission();
                console.log(permission);
                return permission;
            }
            catch (error) {
                console.log("ERROR :" + error);
            }
        });
    }
    //this method will check if there is permission to use the device speech recognition features
    hasPermission() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hasPermission = yield this.speechRecognition.hasPermission();
                console.log(hasPermission);
                return hasPermission;
            }
            catch (error) {
                console.log("ERROR :" + error);
            }
        });
    }
    //this method will get the supported spoken Languages
    getSupportedLanguages() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const languages = yield this.speechRecognition.getSupportedLanguages();
                console.log(languages);
                return languages;
            }
            catch (error) {
                console.log("ERROR :" + error);
            }
        });
    }
    //this method will start listing to the SPEECH spoken by user
    listenForSpeech() {
        this.speechRecognition.startListening()
            .subscribe(data => {
            console.log(data);
            //alert(`Spoken Data : ${data}`);
            //updating UI text area
            this.convertedSpeechMessage = data[0];
        }, error => console.log(error));
    }
    //=== === === === === === === === === BLUTOOTH METODS === === === === === === === === === 
    //this method will disconnect the glove and go back to device info page
    endSubscriptionFromBluetooth() {
        //disconnecting device
        this.bluetoothSerial.disconnect();
        //changing page
        this.goToDeviceInfoPage();
        this.isSubscribedToBluetooth = false;
    }
    //this method will SUBSCRIBE data via the bluethooth serial - will check for incoming bluetooth serial data
    subscribeDataFromBluetooth() {
        this.isSubscribedToBluetooth = true;
        let self = this;
        // the success callback is called whenever data is received
        let subscribeObservable = this.bluetoothSerial.subscribe('\n');
        //This function will bind the bluethooth data to the text area
        function invoke(ins, dataObservable) {
            dataObservable.subscribe((res) => {
                let dataPacket = res;
                ins.onDataRecieved({ "message": dataPacket });
                //checking if sound is on
                if (ins.isSoundOn) {
                    //calling sat text method to output the speech
                    ins.sayText();
                }
            }).catch(e => {
                console.log("SUBSCRIBE ERROR =========> " + e);
                this.isSubscribedToBluetooth = false;
            });
        }
        //calling the above method
        invoke(self, subscribeObservable);
    }
    //=== === === === === === === === === PAGE NAVIGATION === === === === === === === === === === ===
    //navigate to the deviceInfo page
    goToDeviceInfoPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    }
    //=== === === === === === === === === === TESTING METHODS === === === === === === === === === ===
    //this method will SEND data via the bluethooth serial  - FOR TESTING
    sendDataToBluetooth() {
        //writeing to the bluetooth serial
        this.bluetoothSerial.write('Sample text');
    }
    //this method will READ data via the bluethooth serial - FOR TESTING
    readDataFromBluetooth() {
        var dataVal = this.bluetoothSerial.read();
        var self = this;
        //This function will bind the bluethooth data to the text area
        function invoke(ins, dataPromise) {
            dataPromise.then((res) => {
                ins.msgFromGlove = res;
                //for testing
                alert(`Data is -> ${ins.msgFromGlove}`);
            }).catch(e => {
                console.log(e);
            });
        }
        //calling the above method
        invoke(self, dataVal);
    }
};
ConvertorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-convertor',template:/*ion-inline-start:"/Users/devon/Desktop/SignSpeaks/Application/src/pages/convertor/convertor.html"*/'<ion-header>\n  <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>convertor</ion-title>\n  </ion-navbar>\n</ion-header> \n<ion-content text-center>\n    <div class="gloveImgContainer">\n       <!-- Giving user quick details on info how to use app at the perticular point in the app -->\n        <p >Make a sign to convert to text/speech</p>\n    </div>\n    <p > \n        Device Status :\n        <b [hidden]=\'!connectionStatus\' class="greenClass"> CONNECTED</b> \n        <b [hidden]=\'connectionStatus\' class="redClass"> DISCONNECTED</b> \n    </p>\n    <!-- this div section will appear if the device is NOT connected to the glove -->\n    <div [hidden]=\'connectionStatus\'>\n        <ion-card>  \n           <ion-card-content>  \n            You can not use the <b>sign to text or speech </b>convertor \n            when device is not connected!\n            <hr>\n            <button ion-button icon-left color=\'danger\' (click)=\'goToDeviceInfoPage()\'>\n                <ion-icon name="arrow-back"></ion-icon>\n                Go back to Device Info \n            </button>\n            </ion-card-content>                \n        </ion-card> \n    \n    </div>\n\n    <!-- this div section  will appear only if the decive is connected to the glove -->\n    <!-- the section for text to speech conversion  -->\n    <div>\n        <div [hidden]=\'!connectionStatus\'>\n            <ion-card>  \n\n                <button *ngIf=\'!isSubscribedToBluetooth\' ion-button color="" (click)=\'subscribeDataFromBluetooth()\'>Start Session</button>  \n                <button *ngIf=\'isSubscribedToBluetooth\' ion-button color="danger" (click)=\'endSubscriptionFromBluetooth()\'>End Session</button>        \n                    \n                <ion-card-header>\n                You:\n                <hr>\n                <ion-item>\n                        <ion-label>Enable speech output</ion-label>\n                        <ion-toggle [(ngModel)]="isSoundOn"></ion-toggle>\n                </ion-item>\n                <hr>\n                </ion-card-header>      \n                <ion-card-content>  \n                    <ion-textarea [(ngModel)]="msgFromGlove" class="textAreaMsgFromGlove" disabled=\'false\'></ion-textarea>\n                    <button ion-button color="secondary" (click)=\'readDataFromBluetooth()\'>Get Data test</button>          \n                </ion-card-content>                \n            </ion-card>\n        </div>    \n        <ion-card> \n            <!-- the section for speech to text conversion  -->\n            <ion-card-header>\n                Partner:\n                <hr>\n            </ion-card-header>\n            <ion-card-content>  \n                <p>\n                    <ion-textarea [(ngModel)]="convertedSpeechMessage" class="textAreaMsgFromGlove" disabled=\'false\'></ion-textarea>\n                <p>\n                <hr>\n                <div >\n                    <button ion-button outline icon-only  (click)=\'listenForSpeech()\' >\n                        <ion-icon name="mic"></ion-icon>\n                    </button>\n                </div>\n                <p>\n                    <small>Click on the mic to convert speech to text</small>\n                <p>\n            </ion-card-content>           \n        </ion-card>\n    </div>   \n\n</ion-content>\n\n\n\n    \n<!-- \n<button ion-button (click)="sendDataToBluetooth()"> Test Send Data </button>\n<button ion-button (click)="readDataToBluetooth()"> Test Read Data </button>\n<p> Normal = {{dataString}}</p> -->\n\n\n\n<!-- <br>\n<button ion-button color="secondary" (click)=\'sayText()\'>Say Text</button>\n<br>\n<button ion-button color="danger" (click)=\'isSpeechSupported()\'> isSpeechSupported</button>\n<br>\n<button ion-button color="danger" (click)=\'getPermission()\'> getPermission</button>\n<br>\n<button ion-button color="danger" (click)=\'hasPermission()\'> hasPermission</button>\n<br>\n<button ion-button color="danger" (click)=\'getSupportedLanguages()\'> getSupportedLanguages </button>\n<br>\n<button ion-button color="danger" (click)=\'listenForSpeech()\'> listen For Speech</button> -->'/*ion-inline-end:"/Users/devon/Desktop/SignSpeaks/Application/src/pages/convertor/convertor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_device_service__["a" /* DeviceService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_text_to_speech__["a" /* TextToSpeech */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_speech_recognition__["a" /* SpeechRecognition */]])
], ConvertorPage);

//# sourceMappingURL=convertor.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_device_service__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let LoginPage = class LoginPage {
    constructor(navCtrl, navParams, menu, userService, deviceService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.userService = userService;
        this.deviceService = deviceService;
        //this variable will store the login button pressed status
        this.isLoginPressed = false;
        //This is the user JSON object that will be passed to the onLogin Method
        this.user = {
            "email": "wdevon99@gmail.com",
            "password": "123456"
        };
        //this will diabale the side menu in the login screen
        this.menu.enable(true);
        this.isLoginPressed = false;
    }
    // user={
    //   'email' : null,
    //   'password' : null
    // }
    //=== === === === === === === === === ===  LOGIN METHOD == === === === === === === === === === ===
    onLogin() {
        console.log("Login Pressed");
        this.isLoginPressed = true;
        //checking if the textfield and password fields are empty or not
        if (this.user.password == null || this.user.email == null) {
            //alert
            alert("All fields must be filled!");
        }
        else {
            //subscribe to the observable returned to send a post request to login a user
            this.userService.loginUser(this.user).subscribe((response) => {
                //getting the body of the response
                let body = JSON.parse(response._body);
                //getting the login status from the response body
                let loginStatus = body.auth;
                //getting the JWT token from the response body
                let token = body.token;
                //initializing the JWT Token - This token is used to securly autenticate with the rest api
                __WEBPACK_IMPORTED_MODULE_5__services_device_service__["a" /* DeviceService */].setJwtToken(token);
                //for debugging
                console.log(token);
                //checking the staus to check if the user credentials are valid
                if (loginStatus) {
                    //changing the page to the home page
                    this.goToHomePage();
                    //alerting the user welcome message
                    alert(body.message);
                }
            }, (error) => {
                //displaying the login failed alert
                alert("Login Failed , Invalid Credentials");
                this.isLoginPressed = false;
                console.log("ERROR :");
                console.log(error);
            });
        }
    }
    //== === === === === === === === === === === == === === === === === === === === === === == === ===
    onForgetPassword() {
        alert("This service is unavailable in the moment");
    }
    //== === === === === === === === === === === == === === === === === === === === === === == === ===
    saveJwtToken() {
    }
    //=== === === === === === === === === PAGE NAVIGATION === === === === === === === === === === ===
    //this method will chage the page to the RegisterPage
    goToHomePage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    }
    //this method will chage the page to the RegisterPage
    goToRegisterPage() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    }
};
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/devon/Desktop/SignSpeaks/Application/src/pages/login/login.html"*/'<ion-content  padding class="background">\n  <div>\n      <div text-center class="logoWhiteContainer">\n        <!-- \n        alt text is set to the images for improved HCL \n        (Accessablity will be improved for the blind since alt text can be used in screen reader)\n         -->\n        <img  src="assets/imgs/whitelogo.png" alt="Signspeaks Logo">\n      </div>\n    <ion-list text-center>\n        <ion-item class="ionItemLogin">\n          <ion-input type="text" placeholder="Email" [(ngModel)]="user.email" required></ion-input>\n        </ion-item>\n        <ion-item class="ionItemLogin">\n          <ion-input type="password" placeholder="Password" [(ngModel)]="user.password"  required></ion-input>\n        </ion-item>\n    </ion-list> \n    <div text-center>\n      <button ion-button icon-left color="blueDark"  (click)=\'onLogin()\'>\n        <ion-icon name="key"></ion-icon>Login     \n      </button>\n      <br>\n      <br>\n      <!-- a forget password field is used to make the user experice of the user better in case he losses his password -->\n      <a href="#" color="light" (click)="onForgetPassword()"> Forgot password?</a>\n      <br>\n      <br>\n      <!-- to improve the user experice (UX) / HCL ,a spinner is used to indicate the login process is goin on when login button is pressed -->\n      <ion-spinner name="crescent" *ngIf="isLoginPressed"></ion-spinner>\n      \n    </div>\n  </div>\n</ion-content>\n<ion-footer class="footer">\n  <div text-center>\n    <a color="light" (click)=\'goToRegisterPage()\'>New to Sign Speaks? <b>Create an account</b></a>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/devon/Desktop/SignSpeaks/Application/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__services_device_service__["a" /* DeviceService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let DeviceService = DeviceService_1 = class DeviceService {
    constructor(http) {
        this.http = http;
    }
    //======== ======== ======== ========
    /**
     * this method will return a observable which can be used to register a user via a post request
     * @param data : a JSON object contsining the message/data packet recieved from the glove via bluethooth
     */
    sendData(data) {
        //for debugging perposes
        console.log("TOKEN");
        console.log(DeviceService_1.jwtToken);
        //For SECURE communication with rest api private routes , the JWT token must be passed in the headers when making a request to the server
        //making a new header object with the  JWT token
        const headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            //setting the jwt token as the token recieved from the server when the user logs in
            "x-auth": DeviceService_1.jwtToken
        });
        //returning a subcribable observable 
        return this.http.post('https://sign-speaks.herokuapp.com/api/gtt', data, { headers: headers });
    }
    //======== ======== ======== ========
    //getters and setters to securly set and acces the jwt token
    static setJwtToken(jwtToken) {
        DeviceService_1.jwtToken = jwtToken;
    }
    static getJwtToken() {
        return DeviceService_1.jwtToken;
    }
};
DeviceService = DeviceService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], DeviceService);

var DeviceService_1;
//# sourceMappingURL=device.service.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    //======== ======== ======== ========
    /**
     * this method will return a observable which can be used to register a user via a post request
     * @param user : A user JSON object with username , email , password and phone number
    */
    registerUser(user) {
        return this.http.post('https://sign-speaks.herokuapp.com/users', user);
    }
    //======== ======== ======== ========
    /**
     * this method will return a observable that can be used to login a user
     * @param user : A user JSON object with email and password
    */
    loginUser(user) {
        return this.http.post('https://sign-speaks.herokuapp.com/users/login', user);
    }
};
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map