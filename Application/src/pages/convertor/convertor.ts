import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

import { DeviceService } from '../../services/device.service';


@IonicPage()
@Component({
  selector: 'page-convertor',
  templateUrl: 'convertor.html',
})
export class ConvertorPage {

  //this variable will save true of flase based on the sound on off toggle
  isSoundOn:boolean=true;
  //this variable will store the connection status - If Connected to device or not
  connectionStatus: boolean = false;
  //this variable will store if the user is subcribed to bluetooth serial or not
  isSubscribedToBluetooth:boolean=false;
  //this variable will store the message from the bluetotth serial 
  msgFromGlove: any = "Message from glove";
  //this variable will store the text retured from the speech convertion
  convertedSpeechMessage:any;

  constructor(public deviceService:DeviceService,public navCtrl: NavController, public navParams: NavParams, public bluetoothSerial: BluetoothSerial,public textToSpeech: TextToSpeech, public speechRecognition: SpeechRecognition) {

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
  onDataRecieved(bluetoothPacket){
    this.deviceService.sendData(bluetoothPacket).subscribe(
      (response)=>{
        console.log(response);
        let body= JSON.parse(response._body);
        let message=body.word;

        console.log("MESSAGE=>");
        console.log(message);  

        if(!message){
          alert(body.error);
        }else{
          alert(message);
        }

        this.msgFromGlove=message;
      },
      (error)=>{
        console.log(error);
      }
    );
  }


  //=== === === === === ===  TEXT TO SPEECH AND SPEECH TO TEXT METODS === === === === === ===
    
  /**
   * this method will convert TEXT to SPEECH and play it if no exceptions are thrown 
  */
  async sayText():Promise<any>{
    try {
      await this.textToSpeech.speak(this.msgFromGlove);
      console.log("Success")
    
    } catch (error) {
      console.log("ERROR :"+error)
    }

  }

  // ------------------ SPEECH to TEXT ------------------

  //checking is speech recognition is Available on the device
  async isSpeechSupported():Promise<boolean>{
    const isAvailable =await this.speechRecognition.isRecognitionAvailable();
    console.log(isAvailable);
    return isAvailable;
  }

  //this method will request to use the device speech recognition features
  async getPermission():Promise<void>{
    try {
      const permission= await this.speechRecognition.requestPermission();
      console.log(permission);
      return permission;
    } catch (error) {
      console.log("ERROR :"+error)
    }
  }

  //this method will check if there is permission to use the device speech recognition features
  async hasPermission():Promise<boolean>{
    try {
      const hasPermission= await this.speechRecognition.hasPermission();
      console.log(hasPermission);
      return hasPermission;
    } catch (error) {
      console.log("ERROR :"+ error)
    }
  }
  
  //this method will get the supported spoken Languages
  async getSupportedLanguages():Promise<Array<String>>{
    try {
      const languages= await this.speechRecognition.getSupportedLanguages();
      console.log(languages);
      return languages;
    } catch (error) {
      console.log("ERROR :"+error)
    }
  }

  //this method will start listing to the SPEECH spoken by user
  listenForSpeech():void{
    this.speechRecognition.startListening()
    .subscribe(data => {
      console.log(data);
      //alert(`Spoken Data : ${data}`);
      //updating UI text area
      this.convertedSpeechMessage=data[0];

    } , error => console.log(error));
  }


  //=== === === === === === === === === BLUTOOTH METODS === === === === === === === === === 

  //this method will disconnect the glove and go back to device info page
  endSubscriptionFromBluetooth(){
    //disconnecting device
    this.bluetoothSerial.disconnect();
    //changing page
    this.goToDeviceInfoPage();

    this.isSubscribedToBluetooth=false;
  }
  

  //this method will SUBSCRIBE data via the bluethooth serial - will check for incoming bluetooth serial data
  subscribeDataFromBluetooth() {

    this.isSubscribedToBluetooth=true;
  
    let self = this;
    // the success callback is called whenever data is received
    let subscribeObservable = this.bluetoothSerial.subscribe('\n');

    //This function will bind the bluethooth data to the text area
    function invoke(ins, dataObservable) {

      dataObservable.subscribe((res) => {

        let dataPacket=res;
        ins.onDataRecieved({"message" : dataPacket });

        //checking if sound is on
        if(ins.isSoundOn){
          //calling sat text method to output the speech
          ins.sayText();
        }
       
      }).catch(e => {
        console.log("SUBSCRIBE ERROR =========> "+e);
        this.isSubscribedToBluetooth=false;
      });
    }
    
    //calling the above method
    invoke(self, subscribeObservable);
  }

  //=== === === === === === === === === PAGE NAVIGATION === === === === === === === === === === ===

  //navigate to the deviceInfo page
  goToDeviceInfoPage() {
    this.navCtrl.push(HomePage);
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
   //=== === === === === === === === === === === === === === === === === === === === === === === ===


}
