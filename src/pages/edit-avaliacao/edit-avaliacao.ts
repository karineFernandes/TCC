import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CriterioPage } from '../criterio/criterio';
import { CheckListPage } from '../check-list/check-list';
import { ParticipantesPage } from '../participantes/participantes';
import { Avaliacao } from '../../modelo/Avaliacao';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-edit-avaliacao',
  templateUrl: 'edit-avaliacao.html',
})
export class EditAvaliacaoPage {
  public aval: Avaliacao;

  codreq:number;
  codchk:number;
  codcrit:number;
  codProj:number;//ter acesso ao codpro
  nota:String;
  comentario:String;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _http:HttpClient) {

      this.codchk = this.navParams.get('codCheckList');
      this.codreq = this.navParams.get('codRequisito');
      this.codcrit = this.navParams.get('codcrite');
      this.codProj = this.navParams.get('codprojeto');
      this.nota = this.navParams.get('nota');
      this.comentario = this.navParams.get('coment');
  }

  alterar(){
    if(this.navParams.get('codisprin')){
    this._http.get('/api/GenericRestService/rest/querytojson//')
    .subscribe(
      (aval)=>{
        console.log(aval);
        this.navCtrl.pop();         
      }
    );

  }else{
    this._http.get('/api/GenericRestService/rest/querytojson//')
      .subscribe(
        (aval)=>{
          console.log(aval);
          this.navCtrl.pop();       
        }
    );
  }       
}

excluir(){ 
  let id = this.navParams.get('codisprin');
  console.log("codStaReq:"+id);
  this._http.get('/api/GenericRestService/rest/querytojson/DELSPRINT/'+id)
  .subscribe(
    (aval)=>{
      console.log(aval);
      this.navCtrl.pop();       
    }
  );

}





  Criterios(){
    this.navCtrl.push(CriterioPage);
  }

  CheckList(){
    this.navCtrl.push(CheckListPage,{codproo:this.codProj,codigocheck:this.codchk});
  }

  Participantes(){
    this.navCtrl.push(ParticipantesPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditAvaliacaoPage');
  }

}
