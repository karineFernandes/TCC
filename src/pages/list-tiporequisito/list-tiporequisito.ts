import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { TipoRequisito } from "../../modelo/TipoRequisito";
import { EditTiporequisitoPage } from '../edit-tiporequisito/edit-tiporequisito';

@IonicPage()
@Component({
  selector: 'page-list-tiporequisito',
  templateUrl: 'list-tiporequisito.html',
})

export class ListTiporequisitoPage {
public tiporequisito:TipoRequisito[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private _http:HttpClient) {
    this._http.get<TipoRequisito[]>('/api/GenericRestService/rest/querytojson/LISTTIPOREQUISITO/null')
      .subscribe(
        (tiporequisito)=>{
          console.log(tiporequisito);
          this.tiporequisito=tiporequisito;
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListTiporequisitoPage');
  }

  getTipoRequisito(){
    return this.tiporequisito;
  }

  novoTipoRequisito(nome){ 
    this.navCtrl.push(EditTiporequisitoPage,{});   
  }

  selecionaTipoRequisito(cod,nome){
    let cn = parseInt(cod);
    this.navCtrl.push(EditTiporequisitoPage,{codtipreq:cn,nomtipreq:nome});
  }

}


