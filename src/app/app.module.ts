import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Ionic2RatingModule } from 'ionic2-rating';

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
import { RatingProvider } from '../providers/rating/rating';

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
    IonicStorageModule.forRoot(),
    Ionic2RatingModule
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
    Data, {provide: ErrorHandler, useClass: IonicErrorHandler},
    RatingProvider,
    RatingProvider
  ]
})
export class AppModule {}
