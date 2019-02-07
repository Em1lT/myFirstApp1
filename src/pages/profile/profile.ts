import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Avatar } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';
import { Pic } from '../../interfaces/pic';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class profilePage {
  avatar;
  url: string = "https://media.mw.metropolia.fi/wbma/uploads/";

  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaProvider:MediaProvider) {
  }
 picArray: Pic[];
  
  ionViewDidLoad() {
 
      this.mediaProvider.getSingleMedia(52).subscribe((response: Pic) =>{
        this.avatar = response.filename;
      })
  }
  logout(){
    this.mediaProvider.loggedIn = false;
    localStorage.clear();
  }
}
