import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class Data {

  public items = [];

  constructor(public storage: Storage){

  }

  getData() {
    return this.storage.get('todos');
  }

  save(data){
    this.storage.set('todos', data);
  }

  filterItems(searchTerm){

    this.getData().then((todos) => {

      if(todos){
        this.items = todos;
      }

    });

    return this.items.filter((item) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }



}
