import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BibliothequePage } from '../pages/bibliotheque/bibliotheque';
import { ALirePage } from '../pages/a-lire/a-lire';
import { AjoutBiblioPage } from '../pages/ajout-biblio/ajout-biblio';
import { BookdetailPage } from '../pages/bookdetail/bookdetail';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {NativeStorage} from "@ionic-native/native-storage";
import { IonicStorageModule } from '@ionic/storage';
import { Data } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    BibliothequePage,
    ALirePage,
    AjoutBiblioPage,
    BookdetailPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BibliothequePage,
    ALirePage,
    AjoutBiblioPage,
    BookdetailPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeStorage,
    Data, {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
