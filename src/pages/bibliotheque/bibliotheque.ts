import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {AjoutBiblioPage} from '../ajout-biblio/ajout-biblio'


/**
 * Generated class for the BibliothequePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bibliotheque',
  templateUrl: 'bibliotheque.html',
})
export class BibliothequePage {

  @ViewChild('myNav') nav: NavController
  pushPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform,) {
    this.pushPage = AjoutBiblioPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BibliothequePage');
  }



}
