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
//CRUD Projeto
import { ProjetoPage } from '../pages/projeto/projeto';
import { EditProjetoPage } from '../pages/edit-projeto/edit-projeto'
//CRUD Requisitos
import { RequisitosPage } from '../pages/requisitos/requisitos';
import { EditRequisitosPage } from '../pages/edit-requisitos/edit-requisitos';
//CRUD STAKEHOLDER
import { StakeholderPage } from '../pages/stakeholder/stakeholder';
import { EditstakeholderPage } from '../pages/editstakeholder/editstakeholder';
//CRUD Sprint
import { SprintPage } from '../pages/sprint/sprint';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListTiporequisitoPage,
    EditTiporequisitoPage,
    StatusRequisitoPage,
    EditstatusRequisitoPage,
    ProjetoPage,
    EditProjetoPage,
    RequisitosPage,
    EditRequisitosPage,
    StakeholderPage,
    EditstakeholderPage,
    SprintPage 
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
    EditstatusRequisitoPage,
    ProjetoPage,
    EditProjetoPage,
    RequisitosPage,
    EditRequisitosPage,
    StakeholderPage,
    EditstakeholderPage,
    SprintPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
