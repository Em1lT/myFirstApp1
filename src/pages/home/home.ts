import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
import { Pic } from '../../interfaces/pic';
import { MediaProvider } from '../../providers/media/media';
import { Observable } from 'rxjs/Observable';
import { UploadPage } from '../upload/upload';
import { PlayerPage } from '../player/player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pics: any;
  mediaArray: Observable<Pic[]>;
  picArray: Pic[] = [];
  //picArray2: Observable<Pic[]>;
  url: string = "https://media.mw.metropolia.fi/wbma/uploads/";
  constructor(public navCtrl: NavController,public http: HttpClient, public mediaProvider: MediaProvider) {

  }
  ionViewDidEnter(){
    this.getAllFiles();
    this.checkLogin();
  }
  checkLogin(){
    if(localStorage.getItem('token')){
      this.mediaProvider.loggedIn = true;
    }
  }
  getAllFiles(){
    this.mediaArray = this.mediaProvider.getAllMedia();
  }
  checkUser(){
    if(localStorage.getItem('token').length > 0){
      this.mediaProvider.loggedIn = true;
    }
  }
  clicked(pic){
    this.navCtrl.push(PlayerPage,{
      picture: pic,
    });
  }
  upload(){
    this.navCtrl.push(UploadPage);
  }
}


//Used in previous assignments!!!!!!!!
//Changes made in 28.01.2019
/*
.subscribe((data: Pic[])=> {
    console.log('data', data);
   /*A:
    this.picArray = data.map((pic: Pic) => {
      //add thumbnail property to pic
      const nameArray = pic.filename.split('.');
      console.log(nameArray);
      pic.thumbnails = {
        160: nameArray[0]+ '-tn160.png',
      }
    return pic;
    //B:
    data.forEach((pic:Pic) => {
      this.mediaProvider.getSingleMedia(pic.file_id)
      .subscribe((file: Pic) => {
        this.picArray.push(file);
      });
    });
  });*/
