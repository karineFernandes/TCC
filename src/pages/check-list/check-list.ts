import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { CheckList } from "../../modelo/CheckList";
import { EditCheckListPage } from '../edit-check-list/edit-check-list';

@IonicPage()
@Component({
  selector: 'page-check-list',
  templateUrl: 'check-list.html',
})
export class CheckListPage {

  public check:CheckList[];
  codProje:number;
  codcheck:number;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private _http:HttpClient) {
    this.codProje = this.navParams.get('codProjeto');
    this.codcheck = this.navParams.get('codigocheck');    
    
    this._http.get<CheckList[]>('/api/GenericRestService/rest/querytojson/LISTCHECKLISTREQ/'+this.codcheck+'&'+this.codProje)
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

  selecionaCheck(codchkl,codpro,nompro,descpro,analiseviab,
    escopo,codpro1,codprodes,datchk){
    this.navCtrl.push(EditCheckListPage,{codcheckList:codchkl,
      codprojeto:codpro,nomepro:nompro,descripro:descpro,
      analise:analiseviab,esco:escopo,codpro1:codpro1,
      codprodes:codprodes,data:datchk });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckListPage');
  }

}
