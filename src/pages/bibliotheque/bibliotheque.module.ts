import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BibliothequePage } from './bibliotheque';

@NgModule({
  declarations: [
    BibliothequePage,
  ],
  imports: [
    IonicPageModule.forChild(BibliothequePage),
  ],
})
export class BibliothequePageModule {}
