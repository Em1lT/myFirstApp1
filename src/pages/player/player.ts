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
  image: boolean = false;
  video: boolean = false;
  audio: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaprovider: MediaProvider) {
    this.selectedItem = navParams.get('picture');
  }

  ionViewDidLoad() {
    this.type();
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
    const id = this.selectedItem.file_id;
    this.mediaprovider.getLikes(id).subscribe(
       (response: Response[]) =>{
         this.likes = response.length;
       }
     )
  }
  type(){
    console.log(this.selectedItem.media_type);
    if(this.selectedItem.media_type == "image"){
      this.image = true;
    }else if(this.selectedItem.media_type == "video"){
     this.video = true;
    }else if(this.selectedItem.media_type == "audio"){
      this.audio = true;
    }
  }

}
