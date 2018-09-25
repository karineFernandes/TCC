import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListTiporequisitoPage } from '../list-tiporequisito/list-tiporequisito';
import { TipoRequisito } from "../../modelo/TipoRequisito";
import { HttpClient } from '@angular/common/http';
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
}
