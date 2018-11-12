import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { STAKEHOLDER } from "../../modelo/STAKE";
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';
import { StakeholderPage } from '../stakeholder/stakeholder';

@IonicPage()
@Component({
  selector: 'page-gre1',
  templateUrl: 'gre1.html',
})
export class Gre1Page {

  public stake:STAKEHOLDER[];
  requisito:number;
  select:boolean;

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      private _http:HttpClient) {
        this.requisito = this.navParams.get('codigoRequisito');//informaçao passada pela tela requisito
        this._http.get<STAKEHOLDER[]>('/api/GenericRestService/rest/querytojson/LISTSTAKEHOLDER/null')
          .subscribe(
            (stake)=>{
              this.stake=stake;
             }
      );
  }

  marcado(){
    this.stake.map(select=>{
      console.log(select.nomstak);
 
    });  
  }

  Stakeholder(){
    this.navCtrl.push(StakeholderPage);
  }
  Home(){
    this.navCtrl.pop(); 
    this.navCtrl.pop();
    this.navCtrl.pop();
    this.navCtrl.pop();  
    this.navCtrl.pop();
    this.navCtrl.pop();  
    this.navCtrl.pop();
    this.navCtrl.pop(); 
  }
  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad Gre1Page');
  }

}