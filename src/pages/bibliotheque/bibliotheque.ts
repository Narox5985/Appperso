import {Component, Injectable, Pipe, PipeTransform} from '@angular/core';
import {AlertController, ModalController, NavController, NavParams} from 'ionic-angular';
import { AjoutBiblioPage } from '../ajout-biblio/ajout-biblio'
import { BookdetailPage } from '../bookdetail/bookdetail';
import { Data } from '../../providers/data/data';
import {titleCase} from "@ionic/app-scripts";
import {ALirePage} from "../a-lire/a-lire";
import * as _ from 'lodash';

@Component({
  selector: 'page-bibliotheque',
  templateUrl: 'bibliotheque.html'
})

export class BibliothequePage {

  public items = [];
  title;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data, public navParams: NavParams, private alertCtrl: AlertController) {

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

  editNote(item){

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

            if(index > -1){
              this.items[index] = data;
            }
          }
        }
      ]
    });

    prompt.present();

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
        this.dataService.save(this.items);
        //this.dataService.save(JSON.stringify(this.items));
        this.navCtrl.setRoot(BibliothequePage); // previous view will be cached
        this.navCtrl.setRoot(BibliothequePage);
      }
    }
  }







}






