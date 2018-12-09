import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ParticipantesRevisao } from '../../modelo/ParticipantesRevisao';
import { EditParticipantesRevisaoPage } from '../edit-participantes-revisao/edit-participantes-revisao';

@IonicPage()
@Component({
  selector: 'page-participantes-revisao',
  templateUrl: 'participantes-revisao.html',
})
export class ParticipantesRevisaoPage {

  public partiRev:ParticipantesRevisao[];
  codrev:number;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private _http:HttpClient) {

    this.codrev = this.navParams.get('codrevisao'); 

    this._http.get<[ParticipantesRevisao]>('/api/GenericRestService/rest/querytojson/LISTPARTICIPANTESPREVISAO/'+this.codrev)
      .subscribe(
        (partiRev)=>{
          this.partiRev=partiRev;
        }
      );    
  }

  getParticipante(){
    return this.partiRev;
  }
 
  novoParticipante(nome){ 
   this.navCtrl.push(EditParticipantesRevisaoPage,{});   
  }

  selecionaParticipante(codrev,codstak){
    //Os nomes escolhidos deverao ser usados na pagina de edicao ao ser passados como parametros
    this.navCtrl.push(EditParticipantesRevisaoPage,{codstake:codstak,codrevisao:codrev});                                   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipantesRevisaoPage');
  }
  
}
