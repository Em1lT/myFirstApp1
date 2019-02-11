import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyFilesPage } from './my-files';

@NgModule({
  declarations: [
    MyFilesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyFilesPage),
  ],
})
export class MyFilesPageModule {}
