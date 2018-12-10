import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RastreabiVertical } from '../../modelo/RastreabiVertical';
import { EditRasVerPage } from '../edit-ras-ver/edit-ras-ver';

@IonicPage()
@Component({
  selector: 'page-rastreabi-vertical',
  templateUrl: 'rastreabi-vertical.html',
})
export class RastreabiVerticalPage {
  public rasVer: RastreabiVertical[];

  codprotra:number;
  codrequi:number;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _http:HttpClient) {

      this.codprotra = this.navParams.get('codProduto');
      this.codrequi = this.navParams.get('codigoRequisito');
      console.log(this.codrequi);
      this._http.get<RastreabiVertical[]>('/api/GenericRestService/rest/querytojson/LISTRASTREABVERTICAL/'+this.codrequi)
      .subscribe(
        (rasVer)=>{
          console.log(rasVer);
          this.rasVer=rasVer;
        }
      );
  }

  selecionaRastreabi(codprotra,codprotraderiv){
    this.navCtrl.push(EditRasVerPage,{codProTra:codprotra,codProDeri:codprotraderiv});
  }

  novaRastreabilidade(){ 
    this.navCtrl.push(EditRasVerPage,{});   
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RastreabiVerticalPage');
  }

}
