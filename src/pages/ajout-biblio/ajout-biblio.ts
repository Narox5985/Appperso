import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
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
  firstname: string;
  surname: string;
  date = new Date().toISOString();

  @Input() numStars: number = 5;
  @Input() readOnly: boolean = false;
  @Input() value: number = 0;

  @Output() clicked: EventEmitter<number> = new EventEmitter<number>();

  stars: string[] = [];


  constructor(public navCtrl: NavController, public view: ViewController) {

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
      description: this.description

    };

    this.view.dismiss(newItem);

  }


  close(){
    this.view.dismiss();
  }


}
