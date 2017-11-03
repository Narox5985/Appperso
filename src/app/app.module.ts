import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BibliothequePage } from '../pages/bibliotheque/bibliotheque';
import { ALirePage } from '../pages/a-lire/a-lire';
import { AjoutBiblioPage } from '../pages/ajout-biblio/ajout-biblio';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {NativeStorage} from "@ionic-native/native-storage";
import {Storage} from "@ionic/storage";
import {Localstorage} from '../providers/localstorage';

@NgModule({
  declarations: [
    MyApp,
    BibliothequePage,
    ALirePage,
    AjoutBiblioPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BibliothequePage,
    ALirePage,
    AjoutBiblioPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeStorage,
    Localstorage,
    Storage
  ]
})
export class AppModule {}
