import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

//Paginas criadas para a criacao do projeto
import { ListTiporequisitoPage } from '../list-tiporequisito/list-tiporequisito';
import { StatusRequisitoPage } from '../../pages/status-requisito/status-requisito';
import { ProjetoPage } from '../../pages/projeto/projeto'
import { RequisitosPage } from '../../pages/requisitos/requisitos';
import { StakeholderPage } from '../../pages/stakeholder/stakeholder';
import { SprintPage } from '../../pages/sprint/sprint';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public data;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  tipoRequisito(){
    this.navCtrl.push(ListTiporequisitoPage);
  }

  statusRequisito(){
    this.navCtrl.push(StatusRequisitoPage);
  }

  Projeto(){
    this.navCtrl.push(ProjetoPage);
  }

  Requisitos(){
    this.navCtrl.push(RequisitosPage);
  }

  Stakeholder(){
    this.navCtrl.push(StakeholderPage);
  }

  Sprint(){  
    const prompt = this.alertCtrl.create({
      title: 'Codigo Projeto ',
      message: "Digite o código do projeto que queira ver na Sprint",
      inputs: [
        {
          name: 'codigo',
          placeholder: 'codigo'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            console.log('Saved clicked');
            this.navCtrl.push(SprintPage,{codinsClient:data.codigo});            
          }
          
        }
      ]
    });
    prompt.present();

    
  }





}
