import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  codProje:number;//ter acesso ao codpro
  nota:String;
  comentario:String;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _http:HttpClient) {

      this.codchk = this.navParams.get('codCheckList');
      this.codreq = this.navParams.get('codRequisito');
      this.codcrit = this.navParams.get('codcrite');
      this.nota = this.navParams.get('nota');
      this.comentario = this.navParams.get('coment');
      this.codProje = this.navParams.get('codProjeto');
  }

  alterar(codchk,codreq,codcrit,nota,coment){
    if(this.navParams.get('codCheckList')){
    this._http.get('/api/GenericRestService/rest/querytojson/UPDAVALIACAOREQ/'+codreq+'&'+codcrit+'&'+nota+'&'+coment+'&'+codchk)
    .subscribe(
      (aval)=>{
        console.log(aval);
        this.navCtrl.pop();         
      }
    );

  }else{
    this._http.get('/api/GenericRestService/rest/querytojson/INSAVALIACAOREQ/'+codchk+'&'+codreq+'&'+codcrit+'&'+nota+'&'+coment)
      .subscribe(
        (aval)=>{
          console.log(aval);
          this.navCtrl.pop();       
        }
    );
  }       
}

excluir(){ 
  let id = this.navParams.get('codCheckList');
  console.log("CHECKLISTDEL:"+id);
  this._http.get('/api/GenericRestService/rest/querytojson/DELAVALIACAOREQ/'+id+'&'+this.codreq+'&'+this.codcrit)
  .subscribe(
    (aval)=>{
      console.log(aval);
      this.navCtrl.pop();       
    }
  );

}

  CheckList(){
    this.navCtrl.push(CheckListPage,{codProjeto:this.codProje,codigocheck:this.codchk});
  }

  Participantes(){
    this.navCtrl.push(ParticipantesPage,{codCheck:this.codchk});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditAvaliacaoPage');
  }

}
