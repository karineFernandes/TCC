import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SprintPage } from '../sprint/sprint';
import { Projeto } from '../../modelo/Projeto'; 

@IonicPage()
@Component({
  selector: 'page-edit-projeto',
  templateUrl: 'edit-projeto.html',
})
export class EditProjetoPage {
  public projet:Projeto;
  codProje: number;  
  nomeProje: String;
  desenvopro: String;
  analiviab: String;
  esco: String;
  nomeproces1: String;
  codProcessoDesenvol: String;
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _http:HttpClient) {

      this.codProje = this.navParams.get('codpro');
      this.nomeProje = this.navParams.get('nompro');
      this.desenvopro = this.navParams.get('despro');
      this.analiviab = this.navParams.get('analiseviab');
      this.esco = this.navParams.get('escopo');
      this.nomeproces1 = this.navParams.get('nompro1');
      this.codProcessoDesenvol = this.navParams.get('codprodes');
  }

  alterar(nomreqlink,desenvopro,analiviab,esco,nomeProces1,codProcessoDesenvol){
      if(this.navParams.get('codpro')){
      this._http.get('/api/GenericRestService/rest/querytojson/UPDProjeto/'+codProcessoDesenvol+'&'+nomreqlink+'&'+desenvopro+'&'+esco+'&'+analiviab+'&'+this.codProje)
      .subscribe(
        (projet)=>{
          console.log(projet);
          this.navCtrl.pop();         
        }
      );

    }else{
      this._http.get('/api/GenericRestService/rest/querytojson/INSProjeto/'+codProcessoDesenvol+'&'+nomreqlink+'&'+desenvopro+'&'+esco+'&'+analiviab+'&')
      .subscribe(
        (projet)=>{
          console.log(projet);
          this.navCtrl.pop();         
        }
      );
    }       
  }

  excluir(){ 
    let id = this.navParams.get('codpro');
    this._http.get('/api/GenericRestService/rest/querytojson/DELProjeto/'+id)
    .subscribe(
      (projet)=>{
        console.log(projet);
        this.navCtrl.pop();         
      }
    );
  }

  Sprint(){  
    this.navCtrl.push(SprintPage,{codProjeto:this.codProje});                
  }
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProjetoPage');
  }

}
