import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { STAKEHOLDER } from "../../modelo/STAKE";
import { EditstakeholderPage } from '../editstakeholder/editstakeholder';


@IonicPage()
@Component({
  selector: 'page-stakeholder',
  templateUrl: 'stakeholder.html',
})
export class StakeholderPage {
  public stake:STAKEHOLDER[];

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      private _http:HttpClient) {
        this._http.get<STAKEHOLDER[]>('/api/GenericRestService/rest/querytojson/LISTSTAKEHOLDER/null')
          .subscribe(
            (stake)=>{
             console.log(stake);
              this.stake=stake;
             }
      );
  }

  getStake(){
    return this.stake;
  }

  novoStake(nomstak){ 
    this.navCtrl.push(EditstakeholderPage,{});   
  }

  selecionaSTAKE(staktip,codstak,cpfstak,staksen,nomstak,stakemail){
    let staketip = parseInt(staktip);
    let codigostake = parseInt(codstak);
    let cpfstake = parseInt(cpfstak);
    this.navCtrl.push(EditstakeholderPage,{staketipo:staketip,codistak:codigostake,
    cpfstakeh:cpfstake,stakesenha:staksen,nomestake:nomstak,stakeemail:stakemail});
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad StakeholderPage');
  }

}
 