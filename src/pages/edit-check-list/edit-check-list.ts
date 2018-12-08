import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-edit-check-list',
  templateUrl: 'edit-check-list.html',
})
export class EditCheckListPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCheckListPage');
  }

}
