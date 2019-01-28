import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { profilePage } from './profile';

@NgModule({
  declarations: [
    profilePage,
  ],
  imports: [
    IonicPageModule.forChild(profilePage),
  ],
})
export class LogoutPageModule {}
