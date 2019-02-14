import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';
import { Observable } from 'rxjs/Observable';
import { Pic, Message } from '../../interfaces/pic';
import { PlayerPage } from '../player/player';
import { ModifyPage } from '../modify/modify';

@IonicPage()
@Component({
  selector: 'page-my-files',
  templateUrl: 'my-files.html',
})
export class MyFilesPage {

  myArray: Observable<Pic[]>;
  url: string = "https://media.mw.metropolia.fi/wbma/uploads/";

  constructor(public navCtrl: NavController, public navParams: NavParams,public mediaProvider: MediaProvider) {
  }

  ionViewDidLoad() {
    this.requestMyFiles();
  }

  requestMyFiles(){
  this.myArray = this.mediaProvider.getUserFiles();
  }

  deleteMyPic(id){
    this.mediaProvider.deleteFile(id).subscribe(
      (response: Message) =>{
        this.requestMyFiles();
        console.log(response);
      }
    );
  }

  clicked(pic : Pic){
    this.navCtrl.push(PlayerPage,{
      picture: pic,
    });
  }
  
  modify(pic : Pic){
    this.navCtrl.push(ModifyPage, {
      picture: pic,
    })
  }
}