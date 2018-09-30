import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

//Paginas criadas para a criacao do projeto
import { ListTiporequisitoPage } from '../list-tiporequisito/list-tiporequisito';
import { TipoRequisito } from '../../modelo/TipoRequisito';

import  { StatusRequisitoPage } from '../../pages/status-requisito/status-requisito';
import { StatusRequisito }  from '../../modelo/StatusRequisito';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }

  tipoRequisito(){
    this.navCtrl.push(ListTiporequisitoPage);
  }

  statusRequisito(){
    this.navCtrl.push(StatusRequisitoPage);
  }

  Projeto(){}

  stakeHolder(){}

  sprint(){}





}
