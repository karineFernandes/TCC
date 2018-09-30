import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListTiporequisitoPage } from '../list-tiporequisito/list-tiporequisito';
import { HttpClient } from '@angular/common/http';
import { TipoRequisito } from "../../modelo/TipoRequisito";


@IonicPage()
@Component({
  selector: 'page-edit-tiporequisito',
  templateUrl: 'edit-tiporequisito.html',
})
export class EditTiporequisitoPage {
  public listaRequisitos: TipoRequisito;
  
  codReq: number;
  nomeReq: String;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _http:HttpClient) {
    this.codReq = navParams.get('codtipreq');
    //let requisitos = this.listaRequisitos;
    this.nomeReq = this.navParams.get('nomtipreq');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTiporequisitoPage');
  }
 
  alterar(nomreqlink){
    let aux = '';

   //Modificar a variavel nomeReq para ser inserida no link
   //Tirar caracteres especiais 
     //nomreqlink = nomreqlink.replace(" ","");

    for (let i = 0; i < nomreqlink.length;i++ ){
      let j = 0;
      if(nomreqlink.charAt(i) == 'ç' ){
        console.log("vetor:"+nomreqlink.charAt(i));
        aux = 'c';
        j = i;
        nomreqlink = nomreqlink.substring(0,j--)+aux+nomreqlink.substring(j+2,nomreqlink.length);
        console.log("2nomreq:"+nomreqlink);
        
      }
        else  if(nomreqlink.charAt(i) == 'ã' || nomreqlink.charAt(i)== 'ã' || nomreqlink.charAt(i) == 'á'|| nomreqlink.charAt(i) == 'Á'){
          aux = 'a';
          j=i;
          nomreqlink = nomreqlink.substring(0,j--) +aux+nomreqlink.substring(j+2,nomreqlink.length);
          console.log("3nomreq:"+nomreqlink);
        }
    }
   
    console.log("nomreq:"+nomreqlink);

    if(this.navParams.get('codReq')){
    this._http.get('/api/GenericRestService/rest/querytojson/UPDTIPOREQUISITO/'+nomreqlink+'&'+this.codReq+'&')
    .subscribe(
      (tiporequisito)=>{
        console.log(tiporequisito);
        this.navCtrl.pop();         
      }
    );

  }else{
    this._http.get('/api/GenericRestService/rest/querytojson/INSTIPOREQUISITO/'+nomreqlink)
    .subscribe(
      (tiporequisito)=>{
        console.log(tiporequisito);
        this.navCtrl.pop();          
      }
    );
  }
       
  }

  excluir(){ 
    let id = this.navParams.get('codReq');
    console.log("codreq:"+id);
    this._http.get('/api/GenericRestService/rest/querytojson/DELTIPOREQUISITO/'+id)
    .subscribe(
      (tiporequisito)=>{
        console.log(tiporequisito);
        this.navCtrl.pop();   
      }
    );

  }
}

// inserir novo elemento > http://camerascasas.no-ip.info:8085/GenericRestService/rest/querytojson/INSTIPOREQUISITO/TIPOREQUISITOXXXX&
// alterar elemento > http://camerascasas.no-ip.info:8085/GenericRestService/rest/querytojson/UPDTIPOREQUISITO/
// deletar elemento > http://camerascasas.no-ip.info:8085/GenericRestService/rest/querytojson/INSTIPOREQUISITOt/