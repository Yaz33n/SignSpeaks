webpackJsonp([3],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        //this will diabale the side menue in the login screen
        this.menu.enable(false);
    }
    //this method will chage the page to the RegisterPage
    LoginPage.prototype.goToRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    //this method will chage the page to the RegisterPage
    LoginPage.prototype.goToHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/devon/Desktop/SingspeakFinalIonicApp/src/pages/login/login.html"*/'<ion-content  padding class="background">\n  <div>\n      <div text-center class="logoWhiteContainer">\n         <img  src="assets/imgs/whitelogo.png">\n      </div>\n    <ion-list text-center>\n        <ion-item class="ionItemLogin">\n          <ion-input type="text" placeholder="Email"></ion-input>\n        </ion-item>\n        <ion-item class="ionItemLogin">\n          <ion-input type="password" placeholder="Password"></ion-input>\n        </ion-item>\n    </ion-list> \n    <div text-center>\n      <button ion-button icon-left color="blueDark"  (click)=\'goToHomePage()\'>\n        <ion-icon name="key" ></ion-icon>Login     \n      </button>\n      <br>\n      <br>\n      <a href="#" color="light" >Forgot password?</a>\n      \n    </div>\n  </div>\n</ion-content>\n<ion-footer class="footer">\n  <div text-center>\n    <a color="light" (click)=\'goToRegisterPage()\'>New to Sign Speaks? <b>Create an account</b></a>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/devon/Desktop/SingspeakFinalIonicApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/devon/Desktop/SingspeakFinalIonicApp/src/pages/register/register.html"*/'\n<ion-content  padding class="background">\n  \n  <div >\n      <div text-center class="logoWhiteContainer">\n          <img  src="assets/imgs/whitelogo.png"  >\n    </div>\n    <ion-list text-center>\n        <ion-item class="ionItemLogin">\n          <ion-input type="text" placeholder="Username"></ion-input>\n        </ion-item>\n        <ion-item class="ionItemLogin">\n          <ion-input type="text" placeholder="Email"></ion-input>\n        </ion-item>\n        <ion-item class="ionItemLogin">\n          <ion-input type="password" placeholder="Password"></ion-input>\n        </ion-item>\n        <ion-item class="ionItemLogin">\n            <ion-input type="password" placeholder="Confirm Password"></ion-input>\n        </ion-item>\n        <ion-item class="ionItemLogin">\n          <ion-input type="number" placeholder="Mobile Number"></ion-input>\n      </ion-item>\n      \n    </ion-list>\n    \n  \n    <div text-center>\n      \n      <button ion-button icon-left color="blueLight" >\n        <ion-icon name="key" > </ion-icon>\n        Register\n      </button>\n      <br>\n      <br>\n    </div>\n    <div text-center>\n        <a href="#"  color="light" >Login as a guest </a>\n    </div>\n    \n  </div>\n\n  \n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/devon/Desktop/SingspeakFinalIonicApp/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/convertor/convertor.module": [
		279,
		2
	],
	"../pages/login/login.module": [
		280,
		1
	],
	"../pages/register/register.module": [
		281,
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
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_bluetooth_serial__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_convertor_convertor__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_path__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_media_capture__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_convertor_convertor__["a" /* ConvertorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/convertor/convertor.module#ConvertorPageModule', name: 'ConvertorPage', segment: 'convertor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_convertor_convertor__["a" /* ConvertorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_media_capture__["a" /* MediaCapture */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__["a" /* FileTransfer */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(103);
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








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, alertCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Device Info', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'ios-bluetooth' },
            { title: 'Convertor', component: __WEBPACK_IMPORTED_MODULE_6__pages_convertor_convertor__["a" /* ConvertorPage */], icon: 'ios-analytics-outline' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    //this method will log the user out
    MyApp.prototype.logOut = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Log out',
            message: 'Do you really want to Log Out?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Log Out',
                    handler: function () {
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
                        console.log("Logged out!");
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/devon/Desktop/SingspeakFinalIonicApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header >\n    <ion-toolbar >\n      <!-- <ion-title >Sign Speak</ion-title> -->\n      <div text-center class="logoWhiteContainerInMenu">\n        <img  src="assets/imgs/whitelogo.png">\n      </div>\n      <!-- <div>\n          <img  src="assets/imgs/profilePic.png" class="profilePic">\n      </div> -->\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon name="{{ p.icon }}"></ion-icon> {{p.title}}\n      </button>\n      <button menuClose ion-item (click)="logOut()">\n          <ion-icon name="power"></ion-icon> Log Out\n        </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>'/*ion-inline-end:"/Users/devon/Desktop/SingspeakFinalIonicApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__ = __webpack_require__(80);
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





var HomePage = (function () {
    //=== === === === === === === === === === === === === === === === === === === === === === === ===
    function HomePage(navCtrl, alertCtrl, bluetoothSerial) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.bluetoothSerial = bluetoothSerial;
        //this is used with the connection to a device is SUCCESSFULL
        this.success = function (data) {
            //this method will set the connection stus to true and update ui
            _this.setTrueValConnectStatus();
            alert(data);
            alert("Device connected :)");
        };
        //this is used with the connection to a device FAILS
        this.fail = function (error) {
            //this method will set the connection stus to false and update ui
            _this.setFalseValConnectStatus();
            alert(error);
            alert("Device failed to connect :(");
        };
        //enabling the blutooth serial for communication
        bluetoothSerial.enable();
    }
    //=== === === === === === === === === === === === === === === === === === === === === === === ===
    //this method will scann the available bluetooth devices
    HomePage.prototype.startScanning = function () {
        var _this = this;
        this.pairedDevices = null;
        this.unpairedDevices = null;
        this.gettingDevices = true;
        this.bluetoothSerial.discoverUnpaired().then(function (success) {
            _this.unpairedDevices = success;
            _this.gettingDevices = false;
            //if discoverUnpaired is succesfull the below statements will run
            success.forEach(function (element) {
                // alert(element.name);
            });
        }, 
        //if discoverUnpaired Fails ,the below statements will run
        function (err) {
            console.log(err);
        });
        //listing all the devices
        this.bluetoothSerial.list().then(function (success) {
            _this.pairedDevices = success;
        }, function (err) {
        });
    };
    //=== === === === === === === === === === === === === === === === === === === === === === === ===
    //this method is used to select a device and connect to it
    HomePage.prototype.selectDevice = function (address) {
        var _this = this;
        //confirmation alert to CONNECT
        var alert = this.alertCtrl.create({
            title: 'Connect',
            message: 'Do you want to connect with?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Connect',
                    handler: function () {
                        //if connect is pressed : the phone will try to connect to the blutooth device
                        _this.bluetoothSerial.connect(address).subscribe(_this.success, _this.fail);
                        //this method will set the connection stus to true and update ui
                        _this.setTrueValConnectStatus();
                    }
                }
            ]
        });
        alert.present();
    };
    //=== === === === === === === === === === === === === === === === === === === === === === === ===
    //this method is used to DISCONNECT a selected device 
    HomePage.prototype.disconnect = function () {
        var _this = this;
        //confirmation alert to disconnect
        var alert = this.alertCtrl.create({
            title: 'Disconnect?',
            message: 'Do you want to Disconnect?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Disconnect',
                    handler: function () {
                        //disconnecting the device
                        _this.bluetoothSerial.disconnect();
                        _this.setFalseValConnectStatus();
                        console.log("disconnected!");
                    }
                }
            ]
        });
        alert.present();
    };
    //=== === === === === === === === === === === === === === === === === === === === === === === ===
    //this method will SEND data via the bluethooth serial
    HomePage.prototype.sendDataToBluetooth = function () {
        this.bluetoothSerial.write('Hello aathif anna');
    };
    //this method will READ data via the bluethooth serial
    HomePage.prototype.readDataToBluetooth = function () {
        var dataVal = this.bluetoothSerial.read();
        dataVal.then(function (result) {
            alert("DataVal :" + result);
        });
    };
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
    HomePage.prototype.goToConvertorPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__convertor_convertor__["a" /* ConvertorPage */], {
            bluetoothSerialObj: this.bluetoothSerial,
            connectionStatus: this.connectionStatus
        });
    };
    //=== === === === === === === === === === === === === === === === === === === === === === === ===
    //this method will set the connection stus to true 
    HomePage.prototype.setTrueValConnectStatus = function () {
        this.connectionStatus = true;
        console.log(this.connectionStatus);
    };
    //this method will set the connection stus to false 
    HomePage.prototype.setFalseValConnectStatus = function () {
        this.connectionStatus = false;
        console.log(this.connectionStatus);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/devon/Desktop/SingspeakFinalIonicApp/src/pages/home/home.html"*/'<ion-header >\n  <ion-navbar >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Device Info</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  text-center>\n  <div class="gloveImgContainer">\n    <img  src="assets/imgs/glove.png" class="gloveImg">\n    <p > Device Status :\n      <b [hidden]=\'!connectionStatus\' class="greenClass"> CONNECTED</b> \n      <b [hidden]=\'connectionStatus\' class="redClass"> DISCONNECTED</b> \n    </p>\n  </div>\n\n\n  <ion-list padding >\n    <div [hidden]=\'connectionStatus\' >\n        <p>Press the scan button to find available gloves </p>\n        <button ion-button color="secondary"  (click)="startScanning()">scan</button>\n    </div>\n    \n    <button ion-button color="danger" [hidden]=\'!connectionStatus\' (click)="disconnect()">Disconnect</button>\n    <ion-list-header>\n      availlable Devices\n    </ion-list-header>\n    <ion-item *ngFor=\'let device of unpairedDevices\'>\n      <span (click)="selectDevice(device.address)" text-center>\n        {{device.name}}\n      </span>\n    </ion-item>\n    <ion-spinner name="crescent" *ngIf="gettingDevices"></ion-spinner>\n  </ion-list>\n  \n  <ion-footer>\n      <button ion-button color="secondary" padding [hidden]=\'!connectionStatus\' (click)="goToConvertorPage()">Open Sign Speak Convertor</button>      \n  </ion-footer>\n  \n  <!-- testing buttons -->\n  <!-- <button ion-button (click)="sendDataToBluetooth()"> Send Data </button>\n  <button ion-button (click)="readDataToBluetooth()"> Read Data </button>\n  <button ion-button (click)="readDataToBluetooth()"> Read Data </button>\n  <button ion-button (click)="setTrueValConnectStatus()">Set true </button>\n  <button ion-button (click)="setFalseValConnectStatus()">Set False </button> -->\n  <!-- testing buttons -->\n\n</ion-content>\n\n\n\n\n\n<!-- <button ion-button secondary menuToggle>Toggle Menu</button> -->'/*ion-inline-end:"/Users/devon/Desktop/SingspeakFinalIonicApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_media_capture__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConvertorPage = (function () {
    function ConvertorPage(mediaCapture, navCtrl, navParams, bluetoothSerial, file, filePath, fileTransfer) {
        this.mediaCapture = mediaCapture;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bluetoothSerial = bluetoothSerial;
        this.file = file;
        this.filePath = filePath;
        this.fileTransfer = fileTransfer;
        this.dataString = "blank";
        this.connectionStatus = false;
        this.msgFromGlove = "Message from glove hehe ";
        this.bluetoothSerial = navParams.get('bluetoothSerialObj');
        this.connectionStatus = navParams.get('connectionStatus');
        //this.subscribeDataFromBluetooth(); //ERRORRRR DUE TO THIS!!!
    }
    ConvertorPage.prototype.testAudio = function () {
        var ft = this.fileTransfer.create();
        var options = {
            fileKey: 'ionfile',
            fileName: 'ionfile',
            chunkedMode: false,
            mimeType: "audio/m4a",
            headers: {}
        };
        this.mediaCapture.captureAudio().then(function (data) {
            ft.upload(data[0].fullPath, 'https://sign-speaks.herokuapp.com/api/stt', {})
                .then(function (data) {
                console.log('DATA IS : =================> ', JSON.stringify(data));
            }, function (err) {
                console.log('DATA IS : =================> ', err);
            });
        }).catch(function (e) { return console.log(e); });
    };
    ConvertorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConvertorPage');
    };
    //this method will SEND data via the bluethooth serial
    ConvertorPage.prototype.sendDataToBluetooth = function () {
        this.bluetoothSerial.write('Sample text');
    };
    //this method will READ data via the bluethooth serial
    ConvertorPage.prototype.readDataFromBluetooth = function () {
        var dataVal = this.bluetoothSerial.read();
        var self = this;
        //This function will bind the bluethooth data to the text area
        function invoke(ins, dataPromise) {
            dataPromise.then(function (res) {
                ins.msgFromGlove = res;
                alert("Data is ----------------> " + ins.msgFromGlove);
            }).catch(function (e) {
                console.log(e);
            });
        }
        //calling the above method
        invoke(self, dataVal);
    };
    //this method will SUBSCRIBE data via the bluethooth serial -- will check for incoming bluetooth data
    ConvertorPage.prototype.subscribeDataFromBluetooth = function () {
        var self = this;
        // the success callback is called whenever data is received
        var subscribeObservable = this.bluetoothSerial.subscribe('\n');
        //This function will bind the bluethooth data to the text area
        function invoke(ins, dataObservable) {
            dataObservable.subscribe(function (res) {
                ins.msgFromGlove = res;
                alert("Data is =-=-=-=> " + ins.msgFromGlove);
            }).catch(function (e) {
                console.log(e);
            });
        }
        //calling the above method
        invoke(self, subscribeObservable);
    };
    //=== === === === === === === === === === === === === === === === === === === === === === === ===
    //navigate to the deviceInfo page
    ConvertorPage.prototype.goToDeviceInfoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ConvertorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-convertor',template:/*ion-inline-start:"/Users/devon/Desktop/SingspeakFinalIonicApp/src/pages/convertor/convertor.html"*/'<ion-header>\n  <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>convertor</ion-title>\n  </ion-navbar>\n</ion-header> \n\n<ion-content  text-center>\n    <div class="gloveImgContainer">\n        <!-- <img  src="assets/imgs/convertPageImg.png" class="gloveImg"> -->\n        <p >Make a sign to convert to text/speech</p>\n    </div>\n    <p > \n        Device Status :\n        <b [hidden]=\'!connectionStatus\' class="greenClass"> CONNECTED</b> \n        <b [hidden]=\'connectionStatus\' class="redClass"> DISCONNECTED</b> \n    </p>\n\n    <!-- this div section will appear if the device is NOT connected to the glove -->\n    <!-- <div [hidden]=\'connectionStatus\'> -->\n    <div [hidden]=\'true\'>\n        <ion-card>      \n           <ion-card-content>  \n            You can not use the <b>sign to text or speech </b>convertor \n            when device is not connected!\n            <hr>\n            <button ion-button icon-left color=\'danger\' (click)=\'goToDeviceInfoPage()\'>\n                <ion-icon name="arrow-back"></ion-icon>\n                Go back to Device Info \n            </button>\n            </ion-card-content>                \n        </ion-card>      \n    </div>\n\n    <!-- this div section  will appear only if the decive is connected to the glove -->\n    <div>\n        <!-- <div [hidden]=\'!connectionStatus\'> -->\n        <div [hidden]=\'false\'>\n            <ion-card>      \n                <ion-card-header>\n                You:\n                <hr>\n                <ion-item>\n                        <ion-label>Enable speech output</ion-label>\n                        <ion-toggle [(ngModel)]="enableSpeech"></ion-toggle>\n                </ion-item>\n                <hr>\n                </ion-card-header>      \n                <ion-card-content>  \n\n                    <!-- <p>\n                        Sign to text coverted text will appear here\n                    <p> -->\n                    <ion-textarea [(ngModel)]="msgFromGlove" class="textAreaMsgFromGlove" disabled=\'true\'></ion-textarea>\n                    <button ion-button color="secondary" (click)=\'readDataFromBluetooth()\'>Get Data test</button>\n                    \n                    <button ion-button color="danger" (click)=\'testAudio()\'>Record audio</button>\n                </ion-card-content>                \n            </ion-card>\n        </div>    \n        <ion-card>      \n            <ion-card-header>\n                Partner:\n                <hr>\n            </ion-card-header>\n            <ion-card-content>  \n                <p>\n                    Speech to text coverted text will appear here\n                <p>\n                <hr>\n                <div >\n                    <button ion-button outline icon-only >\n                        <ion-icon name="mic"></ion-icon>\n                    </button>\n                </div>\n                <p>\n                    <small>Click on the mic to convert speech to text</small>\n                <p>\n            </ion-card-content>           \n        </ion-card>\n    </div>   \n</ion-content>\n\n\n    \n<!-- \n<button ion-button (click)="sendDataToBluetooth()"> Test Send Data </button>\n<button ion-button (click)="readDataToBluetooth()"> Test Read Data </button>\n<p> Normal = {{dataString}}</p> -->'/*ion-inline-end:"/Users/devon/Desktop/SingspeakFinalIonicApp/src/pages/convertor/convertor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_media_capture__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], ConvertorPage);
    return ConvertorPage;
}());

//# sourceMappingURL=convertor.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map