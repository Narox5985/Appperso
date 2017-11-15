import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Data} from "../../providers/data/data";
import {Alire} from "../../providers/alire/alire";

/**
 * Generated class for the BookdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aliredetail',
  templateUrl: 'aliredetail.html',
})
export class AliredetailPage {

  title;
  description;
  firstname;
  surname;
  base64Image;
  public items = [];

  constructor(public navParams: NavParams, public dataService: Alire, public view: ViewController){
    this.dataService.getAlire().then((alire) => {

      if (alire) {
        this.items = alire;
      }

    });

  }



  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.firstname = this.navParams.get('item').firstname;
    this.surname = this.navParams.get('item').surname;
    this.description = this.navParams.get('item').description;
    this.base64Image = this.navParams.get('item').picture;

    let cameraImageSelector = document.getElementById('camera-image');
    cameraImageSelector.setAttribute('src', this.base64Image);

  }





}
