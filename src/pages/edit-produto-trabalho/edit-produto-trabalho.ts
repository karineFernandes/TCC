import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ProdutoTrabalho } from '../../modelo/ProdutoTrabalho';
import { RastreabiVerticalPage } from '../rastreabi-vertical/rastreabi-vertical';

@IonicPage()
@Component({
  selector: 'page-edit-produto-trabalho',
  templateUrl: 'edit-produto-trabalho.html',
})
export class EditProdutoTrabalhoPage {
  public pt:ProdutoTrabalho[];
  desprotra:String;// "TESTE2",
  nomprotra: String;//"TESTE2",
  codstak:number;// 1,
  codreq:number;// 1,
  urlacesso: String;//"WWW.X.X",
  codprotra: number;//3,
  dataemiss: String;//"2018-12-06"
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,private _http:HttpClient) {
      this.desprotra = this.navParams.get('descr'); 
      this.nomprotra = this.navParams.get('nome');
      this.codstak = this.navParams.get('cods');
      this.codreq = this.navParams.get('codr');
      this.urlacesso = this.navParams.get('url');
      this.codprotra = this.navParams.get('codp');
      this.dataemiss = this.navParams.get('data');
  }

  alterar(codp,nome,descr,cods,codr,url,data){  
    if(this.navParams.get('codp')){
    this._http.get('/api/GenericRestService/rest/querytojson/UPDPRODUTOTRABALHO/'+codr+'&'+nome+'&'+descr+'&'+url+'&'+data)
    .subscribe(
      (pt)=>{
        console.log(pt);
        this.navCtrl.pop();         
      }
    );

  }else{
    this._http.get('/api/GenericRestService/rest/querytojson/INSPRODUTOTRABALHO/'+codr+'&'+nome+'&'+descr+'&'+url+'&'+data)
    .subscribe(
      (pt)=>{
        console.log(pt);
        this.navCtrl.pop();         
      }
    );
  }       
}

excluir(){ 
  let id = this.navParams.get('codp');
  this._http.get('/api/GenericRestService/rest/querytojson/DELPRODUTOTRABALHO/'+id)
  .subscribe(
    (pt)=>{
      console.log(pt);
      this.navCtrl.pop();         
    }
  );
}

rastreabiVertical(){
  this.navCtrl.push(RastreabiVerticalPage,{codProduto:this.codprotra,codigoRequisito:this.codreq});
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProdutoTrabalhoPage');
  }

}
