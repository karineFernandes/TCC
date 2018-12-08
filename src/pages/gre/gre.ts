import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Gre1Page } from '../gre1/gre1';
import { Gre2Page } from '../gre2/gre2';
import { Gre3Page } from '../gre3/gre3';
import { Gre4Page } from '../gre4/gre4';
import { Gre5Page } from '../gre5/gre5';

@IonicPage()
@Component({
  selector: 'page-gre',
  templateUrl: 'gre.html',
})
export class GrePage {
  codrequi:number;
  codProje:number;

  constructor(public navCtrl: NavController,
     public navParams: NavParams) {
      this.codrequi = this.navParams.get('codRequisito');
      this.codProje = this.navParams.get('codpro');    
  }

  GRE1(){
    this.navCtrl.push(Gre1Page,{codigoRequisito:this.codrequi});
  }

  GRE2(){
    this.navCtrl.push(Gre2Page,{codProjeto:this.codProje,codigoRequisito:this.codrequi});
  }

  GRE3(){
    this.navCtrl.push(Gre3Page);
  }

  GRE4(){
    this.navCtrl.push(Gre4Page);
  }

  GRE5(){
    this.navCtrl.push(Gre5Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GrePage');
  }

}
