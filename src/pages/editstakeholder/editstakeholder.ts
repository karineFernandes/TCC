import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { STAKEHOLDER } from '../../modelo/STAKE';

@IonicPage()
@Component({
  selector: 'page-editstakeholder',
  templateUrl: 'editstakeholder.html',
})
export class EditstakeholderPage {
  public stak:STAKEHOLDER;

  statip:number; 
  codsta:number; 
  stasen:String 
  staemail:String; 
  cpfsta:number;
  nomsta:String;

  constructor(public navCtrl: NavController, public navParams: NavParams,private _http:HttpClient) {
    this.codsta = this.navParams.get('codistak');
    this.nomsta = this.navParams.get('nomestake');
    this.statip = this.navParams.get('staketipo');
    this.cpfsta = this.navParams.get('cpfstakeh');
    this.staemail = this.navParams.get('stakeemail');
    this.stasen = this.navParams.get('stakesenha');
  }

  alterar(nomsta,statip,cpfsta,staemail,stasen){
  
      if(this.navParams.get('codistak')){
      this._http.get('/api/GenericRestService/rest/querytojson/UPDSTAKEHOLDER/'
      +nomsta+'&'+statip+'&'+cpfsta+'&'+staemail+'&'+stasen)
      .subscribe(
        (req)=>{
          console.log(req);
          this.navCtrl.pop();         
        }
      );

    }else{
      this._http.get('/api/GenericRestService/rest/querytojson/INSSTAKEHOLDER/'
      +nomsta+'&'+cpfsta+'&'+staemail+'&'+stasen+'&'+statip)
      .subscribe(
        (req)=>{
          console.log(req);
          this.navCtrl.pop();         
        }
      );
    }       
  }

  excluir(){ 
    let id = this.navParams.get('codistak');;
    this._http.get('/api/GenericRestService/rest/querytojson/DELSTAKEHOLDER/'+id)
    .subscribe(
      (req)=>{
        console.log(req);
        this.navCtrl.pop();         
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditstakeholderPage');
  }

}
