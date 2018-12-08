import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditParticipantesPage } from './edit-participantes';

@NgModule({
  declarations: [
    EditParticipantesPage,
  ],
  imports: [
    IonicPageModule.forChild(EditParticipantesPage),
  ],
})
export class EditParticipantesPageModule {}
