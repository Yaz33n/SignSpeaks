import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { HomePage } from '../home/home';
import { BingSpeechClient, VoiceRecognitionResponse } from 'bingspeech-api-client';
import { FilePath } from '@ionic-native/file-path';
import { Platform } from 'ionic-angular';
import { MediaObject } from '@ionic-native/media';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Base64 } from '@ionic-native/base64';

declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-convertor',
  templateUrl: 'convertor.html',
})
export class ConvertorPage {

  dataString = "blank";
  connectionStatus: boolean = false;
  msgFromGlove: any = "Message from glove hehe ";

  constructor(private mediaCapture: MediaCapture, public navCtrl: NavController, public navParams: NavParams, public bluetoothSerial: BluetoothSerial, private file: File, private filePath: FilePath, private fileTransfer: FileTransfer,
    private base64: Base64) {

    this.bluetoothSerial = navParams.get('bluetoothSerialObj');
    this.connectionStatus = navParams.get('connectionStatus');
    //this.subscribeDataFromBluetooth(); //ERRORRRR DUE TO THIS!!!
  }



  testAudio() {

    const ft: FileTransferObject = this.fileTransfer.create();

    this.mediaCapture.captureAudio().then(data => {

      let filePath: string = data[0].fullPath;
      this.base64.encodeFile(filePath).then((base64File: string) => {
        console.log("DATATADTADTADTADTADAT ", base64File);
      }).catch((err) => {
        console.log("ERERERERERRERERERREERER ", err);
      });
    }).catch(e => console.log(e));
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ConvertorPage');
  }

  //this method will SEND data via the bluethooth serial
  sendDataToBluetooth() {
    this.bluetoothSerial.write('Sample text');
  }

  //this method will READ data via the bluethooth serial
  readDataFromBluetooth() {
    var dataVal = this.bluetoothSerial.read();
    var self = this;

    //This function will bind the bluethooth data to the text area
    function invoke(ins, dataPromise) {
      dataPromise.then((res) => {
        ins.msgFromGlove = res;
        alert(`Data is ----------------> ${ins.msgFromGlove}`);
      }).catch(e => {
        console.log(e);
      });
    }
    //calling the above method
    invoke(self, dataVal);
  }

  //this method will SUBSCRIBE data via the bluethooth serial -- will check for incoming bluetooth data
  subscribeDataFromBluetooth() {
    let self = this;
    // the success callback is called whenever data is received
    let subscribeObservable = this.bluetoothSerial.subscribe('\n');

    //This function will bind the bluethooth data to the text area
    function invoke(ins, dataObservable) {
      dataObservable.subscribe((res) => {
        ins.msgFromGlove = res;
        alert(`Data is =-=-=-=> ${ins.msgFromGlove}`);
      }).catch(e => {
        console.log(e);
      });
    }
    //calling the above method
    invoke(self, subscribeObservable);


  }


  //=== === === === === === === === === === === === === === === === === === === === === === === ===

  //navigate to the deviceInfo page
  goToDeviceInfoPage() {
    this.navCtrl.push(HomePage);
  }


}
