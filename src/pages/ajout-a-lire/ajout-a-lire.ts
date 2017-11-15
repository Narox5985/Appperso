import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ActionSheetButton, IonicPage, NavController, NavParams, Platform, ToastController, ViewController} from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FilePath } from "@ionic-native/file-path";
import {DomSanitizer} from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-ajout-a-lire',
  templateUrl: 'ajout-a-lire.html',

})
export class AjoutalirePage {


  title: string;
  description: string;
  firstname: string;
  surname: string;


  constructor(
    public navCtrl: NavController,
    public view: ViewController,
    private camera: Camera,
    public DomSanitizer: DomSanitizer,
    public toastCtrl: ToastController,
    public platform: Platform) {
  }

  public base64Image : string;

  Picture() {
    this.takePicture(this.camera.PictureSourceType.CAMERA);
  }

  takePicture(sourceType) {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 500,
      targetHeight: 500,
      quality: 100,
      allowEdit: true,
      correctOrientation: false,
      // mediaType: 0
    };

    this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        this.base64Image = "data:image/jpeg;base64," + imageData;
        let cameraImageSelector = document.getElementById('camera-image');
        cameraImageSelector.setAttribute('src', this.base64Image);
      },
      (err) => {
        console.log(err);    });
  }



  saveItem(){

    let newItem = {
      title: this.title,
      firstname: this.firstname,
      surname: this.surname,
      description: this.description,
      picture: this.base64Image,

    };

    this.view.dismiss(newItem);

  }


  close(){
    this.view.dismiss();
  }





}
