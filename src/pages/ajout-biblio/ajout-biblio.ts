import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { NativeStorage } from '@ionic-native/native-storage';


@IonicPage()
@Component({
  selector: 'page-ajout-biblio',
  templateUrl: 'ajout-biblio.html',
})
export class AjoutBiblioPage {

  title: string;
  description: string;

  constructor(public navCtrl: NavController, public view: ViewController) {

  }

  saveItem(){

    let newItem = {
      title: this.title,
      description: this.description
    };

    this.view.dismiss(newItem, this.title);

  }

  close(){
    this.view.dismiss();
  }


}
