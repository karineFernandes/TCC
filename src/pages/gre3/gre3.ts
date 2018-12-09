import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ProdutoTrabalhoPage } from '../produto-trabalho/produto-trabalho';

@IonicPage()
@Component({
  selector: 'page-gre3',
  templateUrl: 'gre3.html',
})
export class Gre3Page {

  codrequi:number;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
    this.codrequi = this.navParams.get('codigoRequisito');
    //console.log("gre3: "+this.navParams.get('codigoRequisito'));
  }

  PT(){
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'codigo'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            this.navCtrl.push(ProdutoTrabalhoPage,{codigoRequisito:this.codrequi,codigoProdu:data.title});    
          }
        }
      ]
    });
    prompt.present();
  
  }

  


  ionViewDidLoad() {
    console.log('ionViewDidLoad Gre3Page');
  }
 
}
