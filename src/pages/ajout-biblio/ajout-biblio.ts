import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ActionSheetButton, IonicPage, NavController, NavParams, Platform, ToastController, ViewController} from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FilePath } from "@ionic-native/file-path";
import {DomSanitizer} from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-ajout-biblio',
  templateUrl: 'ajout-biblio.html',

})
export class AjoutBiblioPage {


  title: string;
  description: string;
  firstname: string;
  surname: string;
  date = new Date().toISOString();



  @Input() numStars: number = 5;
  @Input() readOnly: boolean = false;
  @Input() value: number = 0;

  @Output() clicked: EventEmitter<number> = new EventEmitter<number>();

  stars: string[] = [];


  constructor(
    public navCtrl: NavController,
    public view: ViewController,
    private camera: Camera,
    private filePath: FilePath,
    private diagnostic: Diagnostic,
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



  ngAfterViewInit(){
    this.calc();
  }

  calc(){
    setTimeout(() => {
      this.stars = [];
      let tmp = this.value;
      for(let i=0; i < this.numStars; i++, tmp--)
        if(tmp >= 1)
          this.stars.push("star");
        else if (tmp < 1 && tmp > 0)
          this.stars.push("star-half");
        else
          this.stars.push("star-outline");
    }, 0);
  }

  starClicked(index){
    if(!this.readOnly) {
      this.value = index + 1;
      this.calc();
      this.clicked.emit(this.value);
    }
  }

  saveItem(){

    let newItem = {
      title: this.title,
      firstname: this.firstname,
      surname: this.surname,
      date: this.date,
      rate: this.value,
      description: this.description,
      picture: this.base64Image,

    };

    this.view.dismiss(newItem);

  }


  close(){
    this.view.dismiss();
  }





}
