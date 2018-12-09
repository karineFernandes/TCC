import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { EditProdutoTrabalhoPage } from '../edit-produto-trabalho/edit-produto-trabalho';
import { ProdutoTrabalho } from '../../modelo/ProdutoTrabalho';

@IonicPage()
@Component({
  selector: 'page-produto-trabalho',
  templateUrl: 'produto-trabalho.html',
})
export class ProdutoTrabalhoPage {

  public pt:ProdutoTrabalho[];
  codrequi:number;
  codPRO:number;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private _http:HttpClient) {
    this.codrequi = this.navParams.get('codigoRequisito');
    this.codPRO = this.navParams.get('codigoProdu');

    this._http.get<ProdutoTrabalho[]>('/api/GenericRestService/rest/querytojson/LISTPRODUTOTRABALHO/'+this.codrequi+'&'+this.codPRO)
      .subscribe(
        (pt)=>{
          this.pt=pt;
        }
      );    
  }

  getPT(){
    return this.pt;
  }
 
  novoPT(){ 
    this.navCtrl.push(EditProdutoTrabalhoPage,{});   
  }
  selecionaPT(codprotra,nomprotra,desprotra,codstak,codreq,urlacesso,dataemiss){  
    this.navCtrl.push(EditProdutoTrabalhoPage,{codp:codprotra,nome:nomprotra,descr:desprotra,cods:codstak,codr:codreq,url:urlacesso,data:dataemiss});                                   
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoTrabalhoPage');
  }

}
