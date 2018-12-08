import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AceiteReq } from '../../modelo/Aceite';
import { HttpClient } from '@angular/common/http';
import { STAKEHOLDER } from "../../modelo/STAKE";

@IonicPage()
@Component({
  selector: 'page-edit-aceitereq',
  templateUrl: 'edit-aceitereq.html',
})
export class EditAceitereqPage {
  
  public aceit:AceiteReq[];
  public stake:STAKEHOLDER[];

  codigoReq = this.navParams.get('coreq');
  codigoStake = this.navParams.get('coste');
  dataAcei = this.navParams.get('data');

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      private _http:HttpClient) {
        this._http.get<STAKEHOLDER[]>('/api/GenericRestService/rest/querytojson/LISTSTAKEHOLDER/null')
          .subscribe(
            (stake)=>{
             console.log(stake);
              this.stake=stake;
             }
      );
  }

   alterar(codigoReq,codigoStake,dataAcei){  
      if(this.navParams.get('coreq')){
      this._http.get('/api/GenericRestService/rest/querytojson/UPDACEITEREQ/'+codigoReq+"&"+codigoStake+"&"+dataAcei)
      .subscribe(
        (aceit)=>{
          console.log(aceit);
          this.navCtrl.pop();         
        }
      );

    }else{
      this._http.get('/api/GenericRestService/rest/querytojson/INSACEITEREQ/'+codigoReq+"&"+codigoStake+"&"+dataAcei)
      .subscribe(
        (aceit)=>{
          console.log(aceit);
          this.navCtrl.pop();         
        }
      );
    }       
  }

  excluir(){ 
    let id = this.navParams.get('coreq');
    this._http.get('/api/GenericRestService/rest/querytojson/DELCRITERIOS/'+id)
    .subscribe(
      (aceit)=>{
        console.log(aceit);
        this.navCtrl.pop();         
      }
    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditAceitereqPage');
  }

}
