import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ParticipantesCheckList } from '../../modelo/ParticipantesCheckList';
import { EditParticipantesPage } from '../edit-participantes/edit-participantes';

@IonicPage()
@Component({
  selector: 'page-participantes',
  templateUrl: 'participantes.html',
})
export class ParticipantesPage {

  public parti:ParticipantesCheckList[];
  codchk:number;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private _http:HttpClient) {

    this.codchk = this.navParams.get('codCheck'); 

    this._http.get<[ParticipantesCheckList]>('/api/GenericRestService/rest/querytojson/LISTPARTICIPCHEKLISTREQUISITOS/'+this.codchk)
      .subscribe(
        (parti)=>{
          this.parti=parti;
        }
      );    
  }

  getCriterios(){
    return this.parti;
  }
 
  novoParticipante(nomestake){ 
   this.navCtrl.push(EditParticipantesPage,{});   
  }

  selecionaParticipante(codchk,codstak,nomstak,observ){
    //Os nomes escolhidos deverao ser usados na pagina de edicao ao ser passados como parametros
    this.navCtrl.push(EditParticipantesPage,{codcheck:codchk, codstake:codstak,nomestake:nomstak,obs:observ});                                   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipantesPage');
  }

}
