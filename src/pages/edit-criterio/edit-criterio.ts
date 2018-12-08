import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Criterios } from '../../modelo/Criterios';

@IonicPage()
@Component({
  selector: 'page-edit-criterio',
  templateUrl: 'edit-criterio.html',
})
export class EditCriterioPage {
  public cri:Criterios;
  
  codigoCri = this.navParams.get('codigo');
  nomCrite = this.navParams.get('nomecrite');
  descCriterio = this.navParams.get('descriter');
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _http:HttpClient) {
     //No navparams usar os mesmos nomes criados quando passado da tela de requisito 
     //para a tela de edicao 
    
  } 
  
   alterar(nomCrite,descCriterio){  
      if(this.navParams.get('codigo')){
      this._http.get('/api/GenericRestService/rest/querytojson/UPDCRITERIOS/'+nomCrite+"&"+descCriterio+"&"+this.codigoCri)
      .subscribe(
        (cri)=>{
          console.log(cri);
          this.navCtrl.pop();         
        }
      );

    }else{
      this._http.get('/api/GenericRestService/rest/querytojson/INSCRITERIOS/'+nomCrite+"&"+descCriterio)
      .subscribe(
        (cri)=>{
          console.log(cri);
          this.navCtrl.pop();         
        }
      );
    }       
  }

  excluir(){ 
    let id = this.navParams.get('codigo');
    this._http.get('/api/GenericRestService/rest/querytojson/DELCRITERIOS/'+id)
    .subscribe(
      (req)=>{
        console.log(req);
        this.navCtrl.pop();         
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCriterioPage');
  }

}
