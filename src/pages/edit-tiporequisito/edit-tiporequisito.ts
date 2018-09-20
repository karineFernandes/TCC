import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListTiporequisitoPage } from '../list-tiporequisito/list-tiporequisito'
import {HttpClient} from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-edit-tiporequisito',
  templateUrl: 'edit-tiporequisito.html',
})
export class EditTiporequisitoPage {
  public listaRequisitos: ListTiporequisitoPage
  
  codReq: number;
  nomeReq: String;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _http:HttpClient) {
    console.log("ola",this.listaRequisitos);
    this.codReq = navParams.get('codtipreq');
    let requisitos = this.listaRequisitos.getRequisito();
    console.log("ola",this.listaRequisitos);
    for(let i=0; i<requisitos.length;i++){
      if(requisitos[i].codtipreq == this.codReq){
        this.nomeReq = requisitos[i].nomtipreq;
        break;
      }
    } 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTiporequisitoPage');
  }

  alterar(){
  
    
  }

  excluir(){}
}
