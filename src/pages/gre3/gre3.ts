import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ProdutoTrabalhoPage } from '../produto-trabalho/produto-trabalho';
import { RastreabiHorizontal } from '../../modelo/RastreabiHorizonta';
import { EditRasHoriPage } from '../edit-ras-hori/edit-ras-hori';

@IonicPage()
@Component({
  selector: 'page-gre3',
  templateUrl: 'gre3.html',
})
export class Gre3Page {
  public rasHor: RastreabiHorizontal[];
  codrequi:number;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private _http:HttpClient) {
    this.codrequi = this.navParams.get('codigoRequisito');

    this._http.get<RastreabiHorizontal[]>('/api/GenericRestService/rest/querytojson/LISTRASTREABHORIZONTAL/'+this.codrequi)
      .subscribe(
        (rasHor)=>{
          console.log(rasHor);
          this.rasHor=rasHor;
        }
      );
  
  }

  PT(){
    const prompt = this.alertCtrl.create({
      title: 'Produto de Trabalho',
      message: "Insira o valor do codigo do produto desejado! ",
      inputs: [
        {
          name: 'title',
          placeholder: 'codigo'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            console.log('Saved clicked');
            this.navCtrl.push(ProdutoTrabalhoPage,{codigoRequisito:this.codrequi,codigoProdu:data.title});    
          }
        }
      ]
    });
    prompt.present();
  
  }

  getRastreabiliade(){
    return this.rasHor;
  }
 
  novaRastreabilidade(nome){ 
    this.navCtrl.push(EditRasHoriPage,{});   
  }

  selecionaRastreabi(creq,codrel){
    this.navCtrl.push(EditRasHoriPage,{codRequisito:creq,codRela:codrel});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Gre3Page');
  }
 
}
