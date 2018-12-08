import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ParticipantesCheckList } from '../../modelo/ParticipantesCheckList';


@IonicPage()
@Component({
  selector: 'page-edit-participantes',
  templateUrl: 'edit-participantes.html',
})
export class EditParticipantesPage {
  public partici: ParticipantesCheckList[];

  codigochk:number;
  codigostak:number;
  nomestake:String;
  observacao: String;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private _http:HttpClient) {

    this.codigochk = this.navParams.get('codcheck');
    this.codigostak = this.navParams.get('codstake');
    this.nomestake = this.navParams.get('nomestake');
    this.observacao = this.navParams.get('obs');
  }

  alterar(codigochk,codigostak,observacao){  
    if(this.navParams.get('codcheck')){
    this._http.get('/api/GenericRestService/rest/querytojson/UPDPARTICIPCHEKLISTREQUISITOS/'+this.codigostak+'&'+this.codigochk+'&'+this.observacao)
    .subscribe(
      (partici)=>{
        console.log(partici);
        this.navCtrl.pop();         
      }
    );

  }else{
    this._http.get('/api/GenericRestService/rest/querytojson/INSPARTICIPCHEKLISTREQUISITOS/'+this.codigostak+'&'+this.codigochk+'&'+this.observacao)
    .subscribe(
      (partici)=>{
        console.log(partici);
        this.navCtrl.pop();         
      }
    );
  }       
}

excluir(){ 
  this._http.get('/api/GenericRestService/rest/querytojson/DELPARTICIPCHEKLISTREQUISITOS/'+this.codigostak+'&'+this.codigochk)
  .subscribe(
    (partici)=>{
      console.log(partici);
      this.navCtrl.pop();         
    }
  );
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditParticipantesPage');
  }

}
