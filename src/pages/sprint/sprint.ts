import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SprintM } from '../../modelo/SprintM'
import { EditSprintPage } from '../edit-sprint/edit-sprint';

@IonicPage()
@Component({
  selector: 'page-sprint',
  templateUrl: 'sprint.html',
})
export class SprintPage {
    public sprin:SprintM[];
    codproj:number; 

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _http:HttpClient) {
     this.codproj = this.navParams.get('codProjeto');
      this._http.get<SprintM[]>('/api/GenericRestService/rest/querytojson/LISTSprint/'+this.codproj)
        .subscribe(
          (sprin)=>{
            console.log("sprint:"+sprin);
            this.sprin = sprin;
          }
        );
    }

  getSprint(){
    return this.sprin;
  }

  novoSprint(nomspr){
    this.navCtrl.push(EditSprintPage,{});   
  }

    selecionaSprint(nomspr,sprdes,nompro,codpro,sprdatini,sprdatafin,sprnumdia,codspr){
    let codiproj = parseInt(codpro);
    let codispri = parseInt(codspr);

    this.navCtrl.push(EditSprintPage,{nomespr:nomspr,sprdesc:sprdes,
    nomeproj:nompro,codiproje:codiproj,spridatainicio:sprdatini,spridatafinal:sprdatafin,
    sprinumdia:sprnumdia,codisprin:codispri});
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SprintPage');
  }

}
