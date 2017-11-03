import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { NativeStorage } from '@ionic-native/native-storage';


/**
 * Generated class for the AjoutBiblioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajout-biblio',
  templateUrl: 'ajout-biblio.html',
})
export class AjoutBiblioPage {

  @ViewChild('myNav') nav: NavController
  pushPage: any;
  public title;
  public local: Storage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage) {

  }

  setInfo(title) {
    this.storage.set('email', title);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutBiblioPage');
  }
}
