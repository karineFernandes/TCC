import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditCheckListPage } from './edit-check-list';

@NgModule({
  declarations: [
    EditCheckListPage,
  ],
  imports: [
    IonicPageModule.forChild(EditCheckListPage),
  ],
})
export class EditCheckListPageModule {}
