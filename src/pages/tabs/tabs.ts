import { Component } from '@angular/core';

import { ALirePage } from '../a-lire/a-lire';
import { BibliothequePage } from '../bibliotheque/bibliotheque';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BibliothequePage;
  tab2Root = ALirePage;

  constructor() {

  }
}
