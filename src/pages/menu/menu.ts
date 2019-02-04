import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginRegisterPage } from '../login-register/login-register';
import { profilePage } from '../../pages/profile/profile';
import { MediaProvider } from '../../providers/media/media';
import { UploadPage } from '../upload/upload';



@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public mediaProvider: MediaProvider){

}
  homeRoot = HomePage;
  loginRoot = LoginRegisterPage;
  profileRoot = profilePage;
  uploadRoot = UploadPage;
}
