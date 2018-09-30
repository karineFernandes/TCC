import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import  {HttpClientModule } from "@angular/common/http";

//CRUD Tipo Requisito
import { ListTiporequisitoPage } from '../pages/list-tiporequisito/list-tiporequisito';
import { EditTiporequisitoPage } from '../pages/edit-tiporequisito/edit-tiporequisito';
//CRUD Status Requisito
import { StatusRequisitoPage } from '../pages/status-requisito/status-requisito';
import { EditstatusRequisitoPage } from '../pages/editstatus-requisito/editstatus-requisito';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListTiporequisitoPage,
    EditTiporequisitoPage,
    StatusRequisitoPage,
    EditstatusRequisitoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListTiporequisitoPage,
    EditTiporequisitoPage,
    StatusRequisitoPage,
    EditstatusRequisitoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
