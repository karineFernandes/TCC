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
import { EditSprintPage } from '../pages/edit-sprint/edit-sprint';
//CRUD Tarefa
import { TarefaPage } from '../pages/tarefa/tarefa';
import { EditTarefaPage } from '../pages/edit-tarefa/edit-tarefa';

import { GrePage } from '../pages/gre/gre';

import { Gre1Page } from '../pages/gre1/gre1';
import { Gre2Page } from '../pages/gre2/gre2';
import { Gre3Page } from '../pages/gre3/gre3';
import { Gre4Page } from '../pages/gre4/gre4';
import { Gre5Page } from '../pages/gre5/gre5';
import { CriterioPage } from '../pages/criterio/criterio';
import { EditCriterioPage } from '../pages/edit-criterio/edit-criterio';

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
    SprintPage,
    EditSprintPage,TarefaPage,EditTarefaPage,GrePage,
    Gre1Page,Gre2Page,Gre3Page,Gre4Page,Gre5Page,
    CriterioPage,EditCriterioPage

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
    SprintPage,
    EditSprintPage,TarefaPage,EditTarefaPage,GrePage,
    Gre1Page,Gre2Page,Gre3Page,Gre4Page,Gre5Page,
    CriterioPage,EditCriterioPage  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
