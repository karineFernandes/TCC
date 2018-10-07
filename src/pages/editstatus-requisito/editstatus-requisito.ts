import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusRequisitoPage } from '../status-requisito/status-requisito';
import { HttpClient } from '@angular/common/http';
import { StatusRequisito } from '../../modelo/StatusRequisito';

@IonicPage()
@Component({
  selector: 'page-editstatus-requisito',
  templateUrl: 'editstatus-requisito.html',
})
export class EditstatusRequisitoPage {
  public statusRequisitos: StatusRequisito;
  
  codStaReq: number;
  nomeStaReq: String;
  nomreqlink: String;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _http:HttpClient) {
    this.codStaReq = this.navParams.get('codstareq');
    this.nomeStaReq = this.navParams.get('nomstreq');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditstatusRequisitoPage');
  }
 
  alterar(nomreqlink){
      let aux = '';

    //Modificar a variavel nomeStaReq para ser inserida no link
    //Tirar caracteres especiais 
      for (let i = 0; i < nomreqlink.length;i++ ){
        let j = 0;
        if(nomreqlink.charAt(i) == 'ç' ){
          aux = 'c';
          j = i;
          nomreqlink = nomreqlink.substring(0,j--)+aux+nomreqlink.substring(j+2,nomreqlink.length);
          console.log("2nomreq:"+nomreqlink);
          
        }
          else  if(nomreqlink.charAt(i) == 'ã' || nomreqlink.charAt(i)== 'ã' || nomreqlink.charAt(i) == 'á'|| nomreqlink.charAt(i) == 'Á'){
            aux = 'a';
            j=i;
            nomreqlink = nomreqlink.substring(0,j--) +aux+nomreqlink.substring(j+2,nomreqlink.length);
          }
      }

      if(this.navParams.get('codstareq')){
      this._http.get('/api/GenericRestService/rest/querytojson/UPDSTATUSREQ/'+nomreqlink+'&'+this.codStaReq+'&')
      .subscribe(
        (statusRequisitos)=>{
          console.log(statusRequisitos);
          this.navCtrl.pop();         
        }
      );

    }else{
      this._http.get('/api/GenericRestService/rest/querytojson/INSSTATUSREQ/'+nomreqlink)
        .subscribe(
          (statusRequisitos)=>{
            console.log(statusRequisitos);
            this.navCtrl.pop();         
          }
      );
    }       
  }
  
  excluir(){ 
    let id = this.navParams.get('codstareq');
    console.log("codStaReq:"+id);
    this._http.get('/api/GenericRestService/rest/querytojson/DELSTATUSREQ/'+id)
    .subscribe(
      (statusRequisitos)=>{
        console.log(statusRequisitos);
        this.navCtrl.pop();         
      }
    );

  }
}
  
