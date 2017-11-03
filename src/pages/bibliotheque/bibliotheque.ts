import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AjoutBiblioPage } from '../ajout-biblio/ajout-biblio'
import { BookdetailPage } from '../bookdetail/bookdetail';
import { Data } from '../../providers/data/data';
import {titleCase} from "@ionic/app-scripts";

@Component({
  selector: 'page-bibliotheque',
  templateUrl: 'bibliotheque.html'
})
export class BibliothequePage {

  public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {

    this.dataService.getData().then((todos) => {

      if(todos){
        this.items = todos;
      }

    });

  }

  ionViewDidLoad(){

  }

  addItem(){

    let addModal = this.modalCtrl.create(AjoutBiblioPage);

    addModal.onDidDismiss((item) => {

      if(item){
        this.saveItem(item);
      }

    });

    addModal.present();

  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }

  viewItem(item){
    this.navCtrl.push(BookdetailPage, {
      item: item
    });


  }

  removeItem(item){

    var i;
    for(i = 0; i < this.items.length; i++) {

      if(this.items[i] == item){
        this.items.splice(i, 1);
      }

    }

  }

}




