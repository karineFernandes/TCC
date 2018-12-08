import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Avaliacao } from '../../modelo/Avaliacao';
import { EditAvaliacaoPage } from '../edit-avaliacao/edit-avaliacao';
import { CriterioPage } from '../criterio/criterio';

@IonicPage()
@Component({
  selector: 'page-gre2',
  templateUrl: 'gre2.html',
})
export class Gre2Page {
  public avali:Avaliacao[];
  codProje:number;
  codrequi:number;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private _http:HttpClient) {
      this.codProje = this.navParams.get('codProjeto');
      this.codrequi = this.navParams.get('codigoRequisito');

      this._http.get<Avaliacao[]>('/api/GenericRestService/rest/querytojson/LISTAVALIACAOREQ/'+this.codrequi)
      .subscribe(
        (avali)=>{
          console.log(avali);
          this.avali=avali;
        }
      );
  }

  getAvalicao(){
    return this.avali;
  }
 
  novaAvaliacao(nome){ 
    this.navCtrl.push(EditAvaliacaoPage,{});   
  }

  selecionaAvalia(cchek,creq,ccri,nota,coment){
    this.navCtrl.push(EditAvaliacaoPage,{codCheckList:cchek,codRequisito:creq,
      codcrite:ccri,nota:nota,coment:coment,codProjeto:this.codProje});
  }

  Criterios(){
    this.navCtrl.push(CriterioPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Gre2Page');
  }

}
