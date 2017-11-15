import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class Alire {

  public items = [];

  constructor(public storage: Storage){

  }

  getAlire() {
    return this.storage.get('alire');
  }

  savealire(data){
    this.storage.set('alire', data);
  }

  filterItems(searchTerm){

    this.getAlire().then((alire) => {

      if(alire){
        this.items = alire;
      }

    });

    return this.items.filter((item) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }


}
