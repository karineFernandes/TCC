import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutoTrabalhoPage } from './produto-trabalho';

@NgModule({
  declarations: [
    ProdutoTrabalhoPage,
  ],
  imports: [
    IonicPageModule.forChild(ProdutoTrabalhoPage),
  ],
})
export class ProdutoTrabalhoPageModule {}
