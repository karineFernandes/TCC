import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Requisitos } from '../../modelo/Requisitos';

@IonicPage()
@Component({
  selector: 'page-edit-requisitos',
  templateUrl: 'edit-requisitos.html',
})
export class EditRequisitosPage {
  public req:Requisitos;

  codstareq: number; //1
  codresp: number; //2,
  nomereq: String; //"Requisito1",
  desreq: String; //"Descr",
  nompro: String; //"Never Alone",
  codspr: String; // 2,
  codfor: number;   //7,
  codtipreq: number; //2,
  nomspr: String; //"Sprint 2",
  codpro: number;// 1,
  nomtipreq: String; //"thatreq7777",
  datareq: Date; //"2016-04-05",
  nomstreq: String; //"Recebido",
  codpro1: number; //1,
  idreq: String; //"REQ1",
  numhorpre: number; //10,
  codreq: number; // 1,
  codspr1: number;// 2
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _http:HttpClient) {
     //No navparams usar os mesmos nomes criados quando passado da tela de requisito 
     //para a tela de edicao 
    this.codstareq = this.navParams.get('codstareq');
    this.codresp = this.navParams.get('codres');
    this.nomereq = this.navParams.get('nomreq');
    this.desreq = this.navParams.get('desreq');
    this.nompro = this.navParams.get('nompro');
    this.codspr = this.navParams.get('codspr');
    this.codfor = this.navParams.get('codfor');
    this.codtipreq = this.navParams.get('codtipreq');
    this.nomspr = this.navParams.get('nomspr');
    this.nomtipreq = this.navParams.get('nometiporeq');
    this.datareq = this.navParams.get('data');
    this.nomstreq = this.navParams.get('nomstreq');
    this.codpro1 = this.navParams.get('codpro1');
    this.idreq = this.navParams.get('idr');
    this.numhorpre = this.navParams.get('numhorpre');
    this.codreq = this.navParams.get('codreq');
    this.codspr1 = this.navParams.get('codprin1');
    this.codpro = this.navParams.get('codpro');
  } 
  
   alterar(nomereq,desreq,nompro,codpro,nomspr,codspr,codfor,
    nomtipreq,codtipreq,nomstreq,codstareq,codpro1,codspr1,idreq,numhorpre,
    codresp,datareq){
  
      if(this.navParams.get('codreq')){
      this._http.get('/api/GenericRestService/rest/querytojson/UPDREQUISITO/'
      +idreq+'&'+codpro+'&'+codspr+'&'+codresp+'&'+codfor+'&'+codstareq+'&'+
      codtipreq+'&'+desreq+'&'+nomereq+'&'+datareq+'&'+numhorpre+'&'+this.codreq)
      .subscribe(
        (req)=>{
          console.log(req);
          this.navCtrl.pop();         
        }
      );

    }else{
      this._http.get('/api/GenericRestService/rest/querytojson/INSREQUISITO/'
      +idreq+'&'+codpro+'&'+codspr+'&'+codresp+'&'+codfor+'&'+codstareq+'&'+
      codtipreq+'&'+desreq+'&'+nomereq+'&'+datareq+'&'+numhorpre)
      .subscribe(
        (req)=>{
          console.log(req);
          this.navCtrl.pop();         
        }
      );
    }       
  }

  excluir(){ 
    let id = this.navParams.get('codreq');
    this._http.get('/api/GenericRestService/rest/querytojson/DELREQUISITO/'+id)
    .subscribe(
      (req)=>{
        console.log(req);
        this.navCtrl.pop();         
      }
    );
  }















  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRequisitosPage');
  }

}
