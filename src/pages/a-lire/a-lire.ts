import { Component } from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {BookdetailPage} from "../bookdetail/bookdetail";
import {AjoutalirePage} from "../ajout-a-lire/ajout-a-lire";
import {Alire} from "../../providers/alire/alire";
import {Data} from "../../providers/data/data";
import {AjoutBiblioPage} from "../ajout-biblio/ajout-biblio";
import {AliredetailPage} from "../aliredetail/aliredetail";


/**
 * Generated class for the ALirePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-a-lire',
  templateUrl: 'a-lire.html',
})
export class ALirePage {

  public items = [];
  searchTerm: string = '';
  title;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Alire, public navParams: NavParams, private alertCtrl: AlertController) {

    this.dataService.getAlire().then((alire) => {

      if (alire) {
        this.items = alire;
      }

    });


  }


  ionViewDidLoad() {

  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }

  addItem(){

    let addModal = this.modalCtrl.create(AjoutalirePage);

    addModal.onDidDismiss((item) => {

      if(item){
        this.saveItem(item);
      }

    });

    addModal.present();

  }

  editNote(item) {

    let prompt = this.alertCtrl.create({
      title: 'Editer le titre',
      inputs: [{
        placeholder: 'Modifier le titre',
        name: 'title',
      }],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            let index = this.items.indexOf(item);

            if (index > -1) {
              this.items[index] = data;
            }
          }
        }
      ]
    });

    prompt.present();

  }


  saveItem(item) {
    this.items.push(item);
    this.dataService.savealire(this.items);
  }

  viewItem(item) {
    this.navCtrl.push(AliredetailPage, {
      item: item
    });
  }


  removeItem(item) {

    var i;
    for (i = 0; i < this.items.length; i++) {

      if (this.items[i] == item) {
        this.items.splice(i, 1);
        this.dataService.savealire(this.items);
        //this.dataService.save(JSON.stringify(this.items));
        this.navCtrl.setRoot(ALirePage); // previous view will be cached
        this.navCtrl.setRoot(ALirePage);
      }
    }
  }
}

