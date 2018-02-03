import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { ConvertorPage } from '../convertor/convertor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //the below boolean with store true if  CONNECTED to anoter device or flase if NOT 
  connectionStatus:boolean;

  //defining the instance variables
  unpairedDevices: any;
  pairedDevices: any;
  //the below boolean with store true or false based on the scanning state
  gettingDevices: Boolean; 
  

  //=== === === === === === === === === === === === === === === === === === === === === === === ===
  
  constructor(public navCtrl: NavController,private alertCtrl: AlertController,private bluetoothSerial: BluetoothSerial) {

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
      })
    //listing all the devices
    this.bluetoothSerial.list().then((success) => {
      this.pairedDevices = success;
    },
      (err) => {

      })
  }

  //=== === === === === === === === === === === === === === === === === === === === === === === ===

  //this method is used to select a device and connect to it
  selectDevice(address: any) {
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
      //this is used with the connection to a device is SUCCESSFULL
      success = (data) =>{
        //this method will set the connection stus to true and update ui
        this.setTrueValConnectStatus();
        alert(data);
        alert("Device connected :)");   
      } 
      //this is used with the connection to a device FAILS
      fail = (error) => {
        //this method will set the connection stus to false and update ui
        this.setFalseValConnectStatus();
        alert(error);
        alert("Device failed to connect :(");      
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
      sendDataToBluetooth(){
          this.bluetoothSerial.write('Hello aathif anna'); 
      }
    
      //this method will READ data via the bluethooth serial
      readDataToBluetooth(){
        var dataVal=this.bluetoothSerial.read();
        dataVal.then(function(result) {
          alert("DataVal :"+result)
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
      goToConvertorPage(){
        this.navCtrl.push(ConvertorPage,{
          bluetoothSerialObj: this.bluetoothSerial,
          connectionStatus:this.connectionStatus
        });
      }
      //=== === === === === === === === === === === === === === === === === === === === === === === ===
  
      //this method will set the connection stus to true 
      setTrueValConnectStatus(){
        this.connectionStatus=true;
        console.log(this.connectionStatus);
      }
      //this method will set the connection stus to false 
      setFalseValConnectStatus(){
        this.connectionStatus=false;
        console.log(this.connectionStatus);
      }


}
