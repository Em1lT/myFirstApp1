import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifyPage } from './modify';

@NgModule({
  declarations: [
    ModifyPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifyPage),
  ],
})
export class ModifyPageModule {}
