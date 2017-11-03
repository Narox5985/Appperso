import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ALirePage } from './a-lire';

@NgModule({
  declarations: [
    ALirePage,
  ],
  imports: [
    IonicPageModule.forChild(ALirePage),
  ],
})
export class ALirePageModule {}
