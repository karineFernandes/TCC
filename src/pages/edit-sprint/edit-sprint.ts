import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, NavParams } from 'ionic-angular';
import { SprintM } from '../../modelo/SprintM';
import { RequisitosPage } from '../requisitos/requisitos';

@Component({
  selector: 'page-edit-sprint',
  templateUrl: 'edit-sprint.html',
})
export class EditSprintPage {
  public sprint: SprintM;
  
    codspri:number; 
    nomspri:string; 
    sprides:string; 
    nomproj:string; 
    codproj:number; 
    spridatini:string; 
    spridatfin:string; 
    sprinumdias:number; 

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private _http:HttpClient) {
    this.codspri = this.navParams.get('codisprin');
    this.nomspri = this.navParams.get('nomespr');
    this.sprides = this.navParams.get('sprdesc');
    this.nomproj = this.navParams.get('nomeproj');
    this.codproj = this.navParams.get('codiproje');
    this.spridatini = this.navParams.get('spridatainicio');
    this.spridatfin = this.navParams.get('spridatafinal');
    this.sprinumdias = this.navParams.get('sprinumdia');
  }

  alterar(nomspri,spridesc,nomproj,codiproj,spridatainicio,spridatafinal,sprinumdias){
     
      if(this.navParams.get('codisprin')){
      this._http.get('/api/GenericRestService/rest/querytojson/UPDSPRINT/'
      +nomspri+'&'+spridatainicio+'&'+spridatafinal+'&'+
      sprinumdias+'&'+codiproj+'&'+spridesc+'&'+this.codspri)
      .subscribe(
        (sprint)=>{
          console.log(sprint);
          this.navCtrl.pop();         
        }
      );

    }else{
      this._http.get('/api/GenericRestService/rest/querytojson/INSSPRINT/'
      +nomspri+'&'+spridatainicio+'&'+spridatafinal+'&'+
      sprinumdias+'&'+codiproj+'&'+spridesc)
        .subscribe(
          (sprint)=>{
            console.log(sprint);
            this.navCtrl.pop();       
          }
      );
    }       
  }
  
  excluir(){ 
    let id = this.navParams.get('codisprin');
    console.log("codStaReq:"+id);
    this._http.get('/api/GenericRestService/rest/querytojson/DELSPRINT/'+id)
    .subscribe(
      (sprint)=>{
        console.log(sprint);
        this.navCtrl.pop();       
      }
    );
  }

  Requisitos(){  
    this.navCtrl.push(RequisitosPage,{codSprint:this.codspri});                
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditSprintPage');
  }

}
