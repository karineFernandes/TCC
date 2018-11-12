import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Projeto } from "../../modelo/Projeto";
import { EditProjetoPage } from '../edit-projeto/edit-projeto';

@IonicPage()
@Component({
  selector: 'page-projeto',
  templateUrl: 'projeto.html',
})
export class ProjetoPage {
  public proj:Projeto[];
  
    constructor(public navCtrl: NavController, 
      public navParams: NavParams, 
      private _http:HttpClient) {
      this._http.get<Projeto[]>('/api/GenericRestService/rest/querytojson/LISTPROJETO/null')
        .subscribe(
          (proj)=>{
            console.log(proj);
            this.proj=proj;
          }
        );
    }

    getProjeto(){
      return this.proj;
    }
  
    novoProjeto(nome){ 
      this.navCtrl.push(EditProjetoPage,{});   
    }
    selecionaProjeto(cod,nome,dp,av,e,np1,cpd){
      let cn = parseInt(cod);
      this.navCtrl.push(EditProjetoPage,{codpro:cn,nompro:nome,despro:dp,analiseviab:av,escopo:e,
      nompro1:np1,codprodes:cpd});
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad ProjetoPage');
    }
  }

 


