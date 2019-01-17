import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
import { Pic } from '../../interfaces/pic';
import { MediaProvider } from '../../providers/media/media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  picArray: Pic[];
  url = "https://media.mw.metropolia.fi/wbma/uploads/";
  constructor(public navCtrl: NavController,public http: HttpClient, private mediaProvider: MediaProvider) {

  }
  ngOnInit(){
    this.mediaProvider.getAllMedia();
  }
  
  clicked(){
    alert("Clicked!!");
  }
}
