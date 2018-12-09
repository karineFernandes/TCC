import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RevisaoProTra } from '../../modelo/RevisaoProTra';
import { EditRevisaoProTraPage } from '../edit-revisao-pro-tra/edit-revisao-pro-tra';

@IonicPage()
@Component({
  selector: 'page-gre4',
  templateUrl: 'gre4.html',
})
export class Gre4Page {
  public rpd:RevisaoProTra[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _http:HttpClient) {
      this._http.get<RevisaoProTra[]>('/api/GenericRestService/rest/querytojson/LISTREVISOESPRODTRAB/null')
      .subscribe(
        (rpd)=>{
          console.log(rpd);
          this.rpd=rpd;
        }
      );
  }

  getRevisao(){
    return this.rpd;
  }
 
  novaRevisao(nome){ 
    this.navCtrl.push(EditRevisaoProTraPage,{});   
  }

  selecionaRevisao(codprotra,codrev,regincons,acoescorr,dathorrev){
    this.navCtrl.push(EditRevisaoProTraPage,{cpd:codprotra,codigorev:codrev,regicon:regincons,acoes:acoescorr,data:dathorrev});
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad Gre4Page');
  }

}
