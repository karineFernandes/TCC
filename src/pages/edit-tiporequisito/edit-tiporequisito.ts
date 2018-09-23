import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListTiporequisitoPage } from '../list-tiporequisito/list-tiporequisito'
import {HttpClient} from '@angular/common/http';
import {TipoRequisito} from "../../modelo/TipoRequisito";

@IonicPage()
@Component({
  selector: 'page-edit-tiporequisito',
  templateUrl: 'edit-tiporequisito.html',
})
export class EditTiporequisitoPage {
  public listaRequisitos: TipoRequisito;
  
  codReq: number;
  nomeReq: String;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _http:HttpClient) {
    this.codReq = navParams.get('codtipreq');
    let requisitos = this.listaRequisitos;
    this.nomeReq=this.navParams.get('nomtipreq');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTiporequisitoPage');
  }

  alterar(){
    this._http.put('/api/GenericRestService/rest/querytojson/LISTTIPOREQUISITO/codReq',{})
    .subscribe(
      (tiporequisito)=>{
        console.log(tiporequisito);
      }
    );
    
  }

  excluir(){}
}
