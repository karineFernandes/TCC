import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrePage } from './gre';

@NgModule({
  declarations: [
    GrePage,
  ],
  imports: [
    IonicPageModule.forChild(GrePage),
  ],
})
export class GrePageModule {}
