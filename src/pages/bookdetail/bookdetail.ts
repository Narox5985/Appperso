import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Data} from "../../providers/data/data";

/**
 * Generated class for the BookdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookdetail',
  templateUrl: 'bookdetail.html',
})
export class BookdetailPage {

  title;
  description;
  firstname;
  date;
  surname;
  rate;
  base64Image;

  @Input() numStars: number = 5;
  @Input() readOnly: boolean = true;
  @Input() value: number = this.navParams.get('item').rate;

  @Output() clicked: EventEmitter<number> = new EventEmitter<number>();

  stars: string[] = [];

  constructor(public navParams: NavParams, public dataService: Data, public view: ViewController){

  }

  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.firstname = this.navParams.get('item').firstname;
    this.surname = this.navParams.get('item').surname;
    this.date = this.navParams.get('item').date;
    this.rate=this.navParams.get('item').rate;
    this.description = this.navParams.get('item').description;
    this.base64Image = this.navParams.get('item').base64Image;
    let cameraImageSelector = document.getElementById('camera-image');
    cameraImageSelector.setAttribute('src', this.base64Image);
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





}
