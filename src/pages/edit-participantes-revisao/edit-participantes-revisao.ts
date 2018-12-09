import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ParticipantesRevisao } from '../../modelo/ParticipantesRevisao';

@IonicPage()
@Component({
  selector: 'page-edit-participantes-revisao',
  templateUrl: 'edit-participantes-revisao.html',
})
export class EditParticipantesRevisaoPage {
  public partiRev:ParticipantesRevisao;

  codigorev:number;
  codigostak:number;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _http:HttpClient) {
      this.codigorev = this.navParams.get('codrevisao'); 
      this.codigostak = this.navParams.get('codstake');
  }

  alterar(codrevisao,codstake){  
    if(this.navParams.get('codrevisao')){
    this._http.get('/api/GenericRestService/rest/querytojson/UPDPARTICIPANTESPREVISAO/'+codstake+'&'+codrevisao)
    .subscribe(
      (partiRev)=>{
        console.log(partiRev);
        this.navCtrl.pop();         
      }
    );

  }else{
    this._http.get('/api/GenericRestService/rest/querytojson/INSPARTICIPANTESPREVISAO/'+codstake+'&'+codrevisao)
    .subscribe(
      (partiRev)=>{
        console.log(partiRev);
        this.navCtrl.pop();         
      }
    );
  }       
}

excluir(){ 
  let id = this.navParams.get('codrevisao');
  this._http.get('/api/GenericRestService/rest/querytojson/DELPARTICIPCHEKLISTREQUISITOS/'+id)
  .subscribe(
    (partiRev)=>{
      console.log(partiRev);
      this.navCtrl.pop();         
    }
  );
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditParticipantesRevisaoPage');
  }

}
