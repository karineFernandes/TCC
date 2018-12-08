import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { CheckList } from "../../modelo/CheckList";

//import { CriterioPage } from '../criterio/criterio';
//import { ParticipantesPage } from '../participantes/participantes';
import { EditCheckListPage } from '../edit-check-list/edit-check-list';

@IonicPage()
@Component({
  selector: 'page-check-list',
  templateUrl: 'check-list.html',
})
export class CheckListPage {

  public check:CheckList[];
  codProj:number;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private _http:HttpClient) {
    this.codProj = this.navParams.get('codproo');     

    this._http.get<CheckList[]>('/api/GenericRestService/rest/querytojson/LISTCHECKLISTREQ/'+this.codProj+'&')
      .subscribe(
        (check)=>{
          console.log(check);
          this.check=check;
        }
      );
  }

  getCheckList(){
    return this.check;
  }

  novoCheck(nome){ 
    this.navCtrl.push(EditCheckListPage,{});   
  }

  selecionaCheck(codchkl,codpro,datchk){
    let codcheck = parseInt(codchkl);
    let codproje = parseInt(codpro)
    this.navCtrl.push(EditCheckListPage,{codcheckList:codcheck,codprojeto:codproje,data:datchk });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckListPage');
  }

}
