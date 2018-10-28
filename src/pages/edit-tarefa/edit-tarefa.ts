import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tarefas } from '../../modelo/Tarefa';

@IonicPage()
@Component({
  selector: 'page-edit-tarefa',
  templateUrl: 'edit-tarefa.html',
})
export class EditTarefaPage {
  public tar:Tarefas;

  nomtar: string;
  codtar: number;
  desctar: string;
  nomereq: string;
  codreq:number; 
  idreq: string;
  codtiptar:number; 
  nomtiptar: string;
  codstak: number;
  nomstak: string;
  tarstatus: number;
  tarpri: number;
  tarinipre: string;
  tarfinpre: string;
  tarfinreal: string;
  numhortaraju: number;
  tarfinpreaju: string;
  numhortar: number;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _http:HttpClient) {
     //No navparams usar os mesmos nomes criados quando passado da tela de requisito 
     //para a tela de edicao 
    this.codtar = this.navParams.get('codigotar');
    this.nomtar = this.navParams.get('nomTar');
    this.desctar = this.navParams.get('destar');
    this.nomereq = this.navParams.get('nomreq');
    this.codreq = this.navParams.get('codireq');
    this.idreq = this.navParams.get('idreq');
    this.codtiptar = this.navParams.get('coditiptar');
    this.nomtiptar = this.navParams.get('nometiptar');
    this.codstak = this.navParams.get('codistak');
    this.nomstak = this.navParams.get('nomestak');
    this.tarstatus = this.navParams.get('tarstatus');
    this.tarpri = this.navParams.get('tarepri');
    this.tarinipre = this.navParams.get('tarinicprec');
    this.tarfinpre = this.navParams.get('tarfinapre');
    this.tarfinreal = this.navParams.get('tarfinreal');
    this.numhortaraju = this.navParams.get('numaju');
    this.tarfinpreaju = this.navParams.get('tarfinpreaju');
    this.numhortar = this.navParams.get('nhoratar');
    console.log("tipotar:"+this.nomtiptar);
   
  } 
   
   alterar(codtar,nomtar,desctar,nomereq,codreq,idreq,codtiptar,nomtiptar,codstak,nomstak,tarstatus,
  tarpri,tarinipre,tarfinpre,tarfinreal,numhortaraju,tarfinpreaju,humhortar){
  
      if(this.navParams.get('codgotar')){
      this._http.get('/api/GenericRestService/rest/querytojson/UPDTAREFA/')
      .subscribe(
        (tar)=>{
          console.log(tar);
          this.navCtrl.pop();         
        }
      );

    }else{
      this._http.get('/api/GenericRestService/rest/querytojson/INSTAREFA/')
      .subscribe(
        (tar)=>{
          console.log(tar);
          this.navCtrl.pop();         
        }
      );
    }       
  }

  excluir(){ 
    let id = this.navParams.get('codigotar');
    this._http.get('/api/GenericRestService/rest/querytojson/DELTAREFA/'+id)
    .subscribe(
      (tar)=>{
        console.log(tar);
        this.navCtrl.pop();         
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTarefaPage');
  }

}
