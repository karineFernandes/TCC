import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ListTiporequisitoPage } from '../list-tiporequisito/list-tiporequisito';
import { TipoRequisito } from '../../modelo/TipoRequisito';


@IonicPage()
@Component({
  selector: 'page-edit-tiporequisito',
  templateUrl: 'edit-tiporequisito.html',
})
export class EditTiporequisitoPage {
  public listaRequisitos: TipoRequisito;
  
  codReq: number;
  nomeReq: String;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _http:HttpClient) {
    this.codReq = navParams.get('codtipreq');
    this.nomeReq = this.navParams.get('nomtipreq');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTiporequisitoPage');
  }
 
  alterar(nomreqlink){
      let aux = '';

    //Modificar a variavel nomeReq para ser inserida no link
    //Tirar caracteres especiais 

      for (let i = 0; i < nomreqlink.length;i++ ){
        let j = 0;
        if(nomreqlink.charAt(i) == 'ç' ){
          aux = 'c';
          j = i;
          nomreqlink = nomreqlink.substring(0,j--)+aux+nomreqlink.substring(j+2,nomreqlink.length);
          
        }
          else  if(nomreqlink.charAt(i) == 'ã' || nomreqlink.charAt(i)== 'ã' || nomreqlink.charAt(i) == 'á'|| nomreqlink.charAt(i) == 'Á'){
            aux = 'a';
            j=i;
            nomreqlink = nomreqlink.substring(0,j--) +aux+nomreqlink.substring(j+2,nomreqlink.length);
          }
      }
    
      if(this.navParams.get('codReq')){
      this._http.get('/api/GenericRestService/rest/querytojson/UPDTIPOREQUISITO/'+nomreqlink+'&'+this.codReq+'&')
      .subscribe(
        (tiporequisito)=>{
          console.log(tiporequisito);
          this.navCtrl.pop();         
        }
      );

    }else{
      this._http.get('/api/GenericRestService/rest/querytojson/INSTIPOREQUISITO/'+nomreqlink)
      .subscribe(
        (tiporequisito)=>{
          console.log(tiporequisito);
          this.navCtrl.pop();          
        }
      );
    }       
  }

  excluir(){ 
    let id = this.navParams.get('codtipreq');
    this._http.get('/api/GenericRestService/rest/querytojson/DELTIPOREQUISITO/'+id)
    .subscribe(
      (tiporequisito)=>{
        console.log(tiporequisito);
        this.navCtrl.pop();   
      }
    );

  }
}
