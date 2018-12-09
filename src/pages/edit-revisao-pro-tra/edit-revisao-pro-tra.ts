import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RevisaoProTra } from '../../modelo/RevisaoProTra';
import { ParticipantesRevisaoPage } from '../participantes-revisao/participantes-revisao'

@IonicPage()
@Component({
  selector: 'page-edit-revisao-pro-tra',
  templateUrl: 'edit-revisao-pro-tra.html',
})
export class EditRevisaoProTraPage {
  public rpd:RevisaoProTra;
  
  codrev:number;// 1,
  regincons:String;//"nenhum",
  acoescorr:String;//"nao e necessario",        
  dathorrev:String;//"2018-09-12 00:00:00.0",
  codprotra:number;// 3

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _http:HttpClient) {

     this.codprotra = this.navParams.get('cpd');
     this.codrev = this.navParams.get('codigorev');
     this.regincons = this.navParams.get('regicon');
     this.acoescorr = this.navParams.get('acoes');
     this.dathorrev = this.navParams.get('data');
  } 
  
   alterar(cpd,codigorev,regicon,acoes,data){  
      if(this.navParams.get('cpd')){
      this._http.get('/api/GenericRestService/rest/querytojson/UPDREVISOESPRODTRAB/'+cpd+'&'+data+'&'+regicon+'&'+acoes+'&'+codigorev)
      .subscribe(
        (rpd)=>{
          console.log(rpd);
          this.navCtrl.pop();         
        }
      );

    }else{
      this._http.get('/api/GenericRestService/rest/querytojson/INSREVISOESPRODTRAB/'+cpd+'&'+data+'&'+regicon+'&'+acoes)
      .subscribe(
        (rpd)=>{
          console.log(rpd);
          this.navCtrl.pop();         
        }
      );
    }       
  }

  excluir(){ 
    let id = this.navParams.get('codigorev');
    this._http.get('/api/GenericRestService/rest/querytojson/DELCRITERIOS/'+id)
    .subscribe(
      (rpd)=>{
        console.log(rpd);
        this.navCtrl.pop();         
      }
    );
  }

  Participantes(){
    this.navCtrl.push(ParticipantesRevisaoPage,{codrevisao:this.codrev});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRevisaoProTraPage');
  }

}
