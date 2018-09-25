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
    console.log("entrei aqui 1");
    
    let requisito = {
      "codigo": this.codReq,
      "nome": nomreqlink
    };

   //Modificar a variavel nomeReq para ser inserida no link
   //Tirar caracteres especiais 
     nomreqlink = nomreqlink.replace(" ","");

    for (let i = 0; i < nomreqlink.length;i++ ){
      console.log("vetor:"+nomreqlink.charAt(i));
      if(nomreqlink.charAt(i) == 'ç' ){
        console.log("vetor:"+nomreqlink.charAt(i));
        aux = 'c';
        nomreqlink = nomreqlink.substring(0,i--)+aux+nomreqlink.substring(i++,nomreqlink.length);
        console.log("2nomreq:"+nomreqlink);
      }
        else  if(nomreqlink.charAt(i) == 'ã' || nomreqlink.charAt(i)== 'ã' || nomreqlink.charAt(i) == 'á'|| nomreqlink.charAt(i) == 'Á'){
          aux = 'a';
          nomreqlink = nomreqlink.substring(0,--i) +aux+nomreqlink.substring(i++,nomreqlink.length);
          console.log("3nomreq:"+nomreqlink);
        }
    }
   
    console.log("nomreq:"+nomreqlink);

    this._http.put('/api/GenericRestService/rest/querytojson/UPDTIPOREQUISITO/'+nomreqlink+"&"+this.codReq+"&",requisito)
    .subscribe(
      (tiporequisito)=>{
        console.log("entrei aqui 3");
        console.log(tiporequisito);
        
      }
    );
    
  }

  excluir(){
  
    this._http.delete('/api/GenericRestService/rest/querytojson/LISTTIPOREQUISITO/')
    .subscribe(
      (tiporequisito)=>{
        console.log(tiporequisito);
      }
    );

  }
}

// inserir novo elemento > http://camerascasas.no-ip.info:8085/GenericRestService/rest/querytojson/INSTIPOREQUISITO/TIPOREQUISITOXXXX&
// alterar elemento > http://camerascasas.no-ip.info:8085/GenericRestService/rest/querytojson/UPDTIPOREQUISITO/
// deletar elemento > http://camerascasas.no-ip.info:8085/GenericRestService/rest/querytojson/INSTIPOREQUISITOt/