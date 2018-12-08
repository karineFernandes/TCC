import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AceiteReq } from '../../modelo/Aceite';
import { EditAceitereqPage } from '../edit-aceitereq/edit-aceitereq';
import { StakeholderPage } from '../stakeholder/stakeholder'

@IonicPage()
@Component({
  selector: 'page-gre1',
  templateUrl: 'gre1.html',
})
export class Gre1Page {
  public acei:AceiteReq[];
  codRequisito:number;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private _http:HttpClient) {
    this.codRequisito=this.navParams.get('codigoRequisito');

    this._http.get<AceiteReq[]>('/api/GenericRestService/rest/querytojson/LISTACEITEREQ/'+this.codRequisito)
      .subscribe(
        (acei)=>{
          this.acei=acei;
        }
      );    
  }

  getAceite(){
    return this.acei;
  }
 
  novoAceite(){ 
    this.navCtrl.push(EditAceitereqPage,{});   
  }

  //A ordem que e passado os parametros do selecionarRequisitos na pagina de html importa
  //Manter a mesma ordem nesse requisito
  selecionaAceite(codRequisito,codistake, dataA){
    let cods = parseInt(codistake);
    //Os nomes escolhidos deverao ser usados na pagina de edicao ao ser passados como parametros
    this.navCtrl.push(EditAceitereqPage,{coreq:this.codRequisito,coste:cods,data:dataA});                                   
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

  Stakeholder(){
    this.navCtrl.push(StakeholderPage,{});  
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad Gre1Page');
  }

}