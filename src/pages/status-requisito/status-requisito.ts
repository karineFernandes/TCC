import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { StatusRequisito } from '../../modelo/StatusRequisito';
import { EditstatusRequisitoPage } from '../editstatus-requisito/editstatus-requisito';

@IonicPage()
@Component({
  selector: 'page-status-requisito',
  templateUrl: 'status-requisito.html',
})
export class StatusRequisitoPage {
  public statusrequisito:StatusRequisito[];
  
    constructor(public navCtrl: NavController, 
      public navParams: NavParams, 
      private _http:HttpClient) {
      this._http.get<StatusRequisito[]>('/api/GenericRestService/rest/querytojson/LISTSTATUSREQ/null')
        .subscribe(
          (statusrequisito)=>{
            console.log(statusrequisito);
            this.statusrequisito = statusrequisito;
          }
        );
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusRequisitoPage');
  }

  getStatusRequisito(){
    return this.statusrequisito;
  }

  novoStatusRequisito(nome){ 
    this.navCtrl.push(EditstatusRequisitoPage,{});   
  }

  selecionaStatusRequisito(cod,nome){
    let cn = parseInt(cod);
    this.navCtrl.push(EditstatusRequisitoPage,{codstareq:cn,nomstreq:nome});
  }


}
