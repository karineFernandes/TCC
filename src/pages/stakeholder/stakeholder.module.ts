import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StakeholderPage } from './stakeholder';

@NgModule({
  declarations: [
    StakeholderPage,
  ],
  imports: [
    IonicPageModule.forChild(StakeholderPage),
  ],
})
export class StakeholderPageModule {}
