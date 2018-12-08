import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { EditCriterioPage } from '../edit-criterio/edit-criterio';
import { Criterios } from '../../modelo/Criterios'

@IonicPage()
@Component({
  selector: 'page-criterio',
  templateUrl: 'criterio.html',
})
export class CriterioPage {

  public crite:Criterios[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private _http:HttpClient) {

    this._http.get<Criterios[]>('/api/GenericRestService/rest/querytojson/LISTCRITERIOS/null')
      .subscribe(
        (crite)=>{
          this.crite=crite;
        }
      );    
  }

  getCriterios(){
    return this.crite;
  }
 
  novoCriterio(nomecri){ 
    this.navCtrl.push(EditCriterioPage,{});   
  }

  //A ordem que e passado os parametros do selecionarRequisitos na pagina de html importa
  //Manter a mesma ordem nesse requisito
  selecionaCriterio(descrit,nomecri,codcrit){
    let codcrite = parseInt(codcrit);
    //Os nomes escolhidos deverao ser usados na pagina de edicao ao ser passados como parametros
    this.navCtrl.push(EditCriterioPage,{codigo:codcrite, nomecrite:nomecri, descriter:descrit});                                   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriterioPage');
  }

}
