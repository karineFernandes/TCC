import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tarefas } from '../../modelo/Tarefa'
import { EditTarefaPage } from '../edit-tarefa/edit-tarefa';

@IonicPage()
@Component({
  selector: 'page-tarefa',
  templateUrl: 'tarefa.html',
})
export class TarefaPage {
  public tarefa:Tarefas[];
  codreq:number; 

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _http:HttpClient) {
     this.codreq = this.navParams.get('codRequisito');
      this._http.get<Tarefas[]>('/api/GenericRestService/rest/querytojson/LISTTarefa/'+this.codreq)
        .subscribe(
          (tarefa)=>{
            console.log(tarefa);
            this.tarefa = tarefa;
          }
        );
    }

  getTarefa(){
    return this.tarefa;
  }
  
  novaTarefa(nomtar){
    this.navCtrl.push(EditTarefaPage,{});   
  }
  
  selecionaTarefa(codtar,nomtar,desctar,nomereq,codreq,idreq,codtiptar,nomtiptar,codstak,nomstak,
    tarstatus,tarpri,tarinipre,tarfinpre,tarfinreal,numhortaraju,tarfinpreaju,numhortar){

    let coditare = parseInt(codtar);
    let codireq = parseInt(codreq);
    let coditipotar = parseInt(codtiptar);
    let codistak = parseInt(codstak);
    let statustar = parseInt(tarstatus);
    let tarepri = parseInt(tarpri);
    let numhorajud = parseInt(numhortaraju);
    let numhoratar = parseInt(numhortar);
    console.log("1tiptar:"+nomtiptar);
  
    this.navCtrl.push(EditTarefaPage,{codigotar:coditare,nomTar:nomtar,destar:desctar,nomreq:nomereq,
      codireq:codireq,idreq:idreq,coditiptar:coditipotar,nometiptar:nomtiptar,codistak:codistak,
      nomestak:nomstak,tarstatus:statustar,tarepri:tarepri,tarinicprec:tarinipre,tarfinapre:tarfinpre,
      tarfinreal:tarfinreal,numaju:numhorajud,tarfinpreaju:tarfinpreaju,nhoratar:numhoratar});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarefaPage');
  }

}
