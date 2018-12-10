import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RastreabiHorizontal } from '../../modelo/RastreabiHorizonta';

@IonicPage()
@Component({
  selector: 'page-edit-ras-hori',
  templateUrl: 'edit-ras-hori.html',
})
export class EditRasHoriPage {
  public rasHor: RastreabiHorizontal[];

  codigoReq:number;
  codigoRel:number;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _http:HttpClient) {
      this.codigoReq = this.navParams.get('codRequisito'); 
      this.codigoRel = this.navParams.get('codRela');
  }

  alterar(codRela,codRequisito){  
    if(this.navParams.get('codRequisito')){
    this._http.get('/api/GenericRestService/rest/querytojson/UPDRASTREABHORIZONTAL/'+codRela+'&'+codRequisito)
    .subscribe(
      (rasHor)=>{
        console.log(rasHor);
        this.navCtrl.pop();         
      }
    );

  }else{
    this._http.get('/api/GenericRestService/rest/querytojson/INSRASTREABHORIZONTAL/'+codRela+'&'+codRequisito)
    .subscribe(
      (rasHor)=>{
        console.log(rasHor);
        this.navCtrl.pop();         
      }
    );
  }       
}

excluir(){ 
  this._http.get('/api/GenericRestService/rest/querytojson/DELRASTREABHORIZONTAL/'+this.codigoReq+'&'+this.codigoRel)
  .subscribe(
    (rasHor)=>{
      console.log(rasHor);
      this.navCtrl.pop();         
    }
  );
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRasHoriPage');
  }

}
