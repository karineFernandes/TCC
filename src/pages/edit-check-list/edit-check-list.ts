import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckList } from '../../modelo/CheckList'; 
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-edit-check-list',
  templateUrl: 'edit-check-list.html',
})
export class EditCheckListPage {
  public check:CheckList;

  codchk: number;
  codProje: number;  
  nomeProje: String;
  descProje:String;
  analiviab: String;
  esco: String;
  codpro1:number;
  codprodes: String;
  datchk: Date;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,private _http:HttpClient) {

      this.codchk = this.navParams.get('codcheckList');
      this.codProje = this.navParams.get('codprojeto');
      this.nomeProje = this.navParams.get('nomepro');
      this.descProje = this.navParams.get('descripro');
      this.analiviab = this.navParams.get('analise');
      this.esco = this.navParams.get('esco');
      this.codpro1 = this.navParams.get('codpro1');
      this.codprodes = this.navParams.get('codprodes');
      this.datchk = this.navParams.get('data');

  }

  alterar(codchk,codProje,datchk){
    if(this.navParams.get('codcheckList')){
    this._http.get('/api/GenericRestService/rest/querytojson/UPDCHECKLISTREQ/'+codProje+'&'+datchk+'&'+codchk)
    .subscribe(
      (check)=>{
        console.log(check);
        this.navCtrl.pop();         
      }
    );

  }else{
    this._http.get('/api/GenericRestService/rest/querytojson/INSCHECKLISTREQ/'+codProje+'&'+datchk)
    .subscribe(
      (check)=>{
        console.log(check);
        this.navCtrl.pop();         
      }
    );
  }       
}

excluir(){ 
  let id = this.navParams.get('codcheckList');
  this._http.get('/api/GenericRestService/rest/querytojson/DELCHECKLISTREQ/'+id)
    .subscribe(
      (check)=>{
        console.log(check);
        this.navCtrl.pop();         
      }
    );
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCheckListPage');
  }

}
