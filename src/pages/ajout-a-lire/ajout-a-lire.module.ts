import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjoutalirePage } from './ajout-a-lire';

@NgModule({
  declarations: [
    AjoutalirePage,
  ],
  imports: [
    IonicPageModule.forChild(AjoutalirePage),
  ],
})
export class AjoutALirePageModule {}
