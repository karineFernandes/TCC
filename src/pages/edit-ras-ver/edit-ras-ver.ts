import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RastreabiVertical } from '../../modelo/RastreabiVertical';

@IonicPage()
@Component({
  selector: 'page-edit-ras-ver',
  templateUrl: 'edit-ras-ver.html',
})
export class EditRasVerPage {
  public rasVer: RastreabiVertical[];

  codprotra:number;
  codproderi:number;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _http:HttpClient) {
      this.codprotra = this.navParams.get('codProTra'); 
      this.codproderi = this.navParams.get('codProDeri');
  }

  alterar(codProTra,codProDeri){  
    if(this.navParams.get('codProTra')){
    this._http.get('/api/GenericRestService/rest/querytojson/UPDRASTREABVERTICAL/'+codProTra+'&'+codProDeri)
    .subscribe(
      (rasVer)=>{
        console.log(rasVer);
        this.navCtrl.pop();         
      }
    );

  }else{
    this._http.get('/api/GenericRestService/rest/querytojson/INSRASTREABVERTICAL/'+codProTra+'&'+codProDeri)
    .subscribe(
      (rasVer)=>{
        console.log(rasVer);
        this.navCtrl.pop();         
      }
    );
  }       
}

excluir(){ 
  this._http.get('/api/GenericRestService/rest/querytojson/DELRASTREABVERTICAL/'+this.codprotra+'&'+this.codproderi)
  .subscribe(
    (rasVer)=>{
      console.log(rasVer);
      this.navCtrl.pop();         
    }
  );
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRasVerPage');
  }

}
