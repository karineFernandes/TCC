import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SprintM } from '../../modelo/SprintM'

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
     this.codproj = this.navParams.get('codinsClient');
      this._http.get<SprintM[]>('/api/GenericRestService/rest/querytojson/LISTSprint/'+this.codproj)
        .subscribe(
          (sprin)=>{
            console.log(sprin);
            this.sprin = sprin;
          }
        );
    }

  getSprint(){
    return this.sprin;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SprintPage');
  }

}
