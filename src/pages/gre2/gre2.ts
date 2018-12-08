import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Avaliacao } from '../../modelo/Avaliacao';
import { EditAvaliacaoPage } from '../edit-avaliacao/edit-avaliacao';


@IonicPage()
@Component({
  selector: 'page-gre2',
  templateUrl: 'gre2.html',
})
export class Gre2Page {
  public avali:Avaliacao[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private _http:HttpClient) {
      this._http.get<Avaliacao[]>('/api/GenericRestService/rest/querytojson/LISTAVALIACAOREQ/1')
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
      codcrite:ccri,nota:nota,coment:coment});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Gre2Page');
  }

}
