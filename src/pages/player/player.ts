import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pic,User } from '../../interfaces/pic';
import { MediaProvider } from '../../providers/media/media';

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {

  selectedItem: Pic[];
  url = "https://media.mw.metropolia.fi/wbma/uploads/";
  user: User[];
  uploader: string = "";
  likes: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaprovider: MediaProvider) {
    this.selectedItem = navParams.get('picture');
  }

  ionViewDidLoad() {
    this.getUser();
    this.getLikes();
  }
  getUser(){
    const id = this.selectedItem.user_id;
   this.mediaprovider.getUser(id).subscribe(
      (response: User[]) =>{
        this.user = response;
         this.uploader = this.user.username;
      }
    )
  }
  getLikes(){
    console.log(this.selectedItem.file_id);
    const id = this.selectedItem.file_id;
    this.mediaprovider.getLikes(id).subscribe(
       (response: Response[]) =>{
         this.likes = response.length;
       }
     )
  }

}
