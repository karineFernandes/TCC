import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Requisitos } from  '../../modelo/Requisitos';
import { EditRequisitosPage } from '../../pages/edit-requisitos/edit-requisitos';

@IonicPage()
@Component({
  selector: 'page-requisitos',
  templateUrl: 'requisitos.html',
})
export class RequisitosPage {
  public requisito:Requisitos[];
  codSPrint:number;
  codSpr:number;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private _http:HttpClient) {
    this.codSPrint = this.navParams.get('codSprint');
    this.codSpr = this.navParams.get('codspr');
    this._http.get<Requisitos[]>('/api/GenericRestService/rest/querytojson/LISTREQUISITO/null')
      .subscribe(
        (requisito)=>{
          console.log(requisito);
         for(let i = 0; i<requisito.length;i++){ 
            if(this.codSPrint == this.codSpr){
              this.requisito=requisito;
              console.log("eu:"+requisito);
            }
          } 
        }
      );
  }

  getRequisitos(){
    return this.requisito;
  }

  novoRequisito(nomereq){ 
    this.navCtrl.push(EditRequisitosPage,{});   
  }
  //A ordem que e passado os parametros do selecionarRequisitos na pagina de html importa
  //Manter a mesma ordem nesse requisito
  selecionaRequisito(nomereq,codstareq,codresp,
    desreq,nompro,codspr,codfor,
    codtipreq,nomspr,codpro,nomtipreq,
    datareq,nomstreq,codpro1,idreq,numhorpre,codreq,codspr1){
    let csr = parseInt(codstareq);
    let cdr = parseInt(codresp);
    let cs = parseInt(codspr);
    let cf = parseInt(codfor);
    let ctr = parseInt(codtipreq);
    let cp = parseInt(codpro);
    let cp1 = parseInt(codpro1);
    let cr = parseInt(codreq);
    let cs1 = parseInt(codspr1);
    let nhp = parseInt(numhorpre);

    //Os nomes escolhidos deverao ser usados na pagina de edicao ao ser passados como parametros
    this.navCtrl.push(EditRequisitosPage,{codstareq:csr,
        codres:cdr,nomreq:nomereq,
        desreq:desreq,nompro:nompro,codspr:cs,codfor:cf,codtipreq:ctr,nomspr:nomspr,codpro:cp,
       nometiporeq:nomtipreq,data:datareq,nomstreq:nomstreq,codpro1:cp1,idr:idreq,
        numhorpre:nhp,codreq:cr,codprin1:cs1});                                   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequisitosPage');
  }

}
