import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';
import { Observable } from 'rxjs/Observable';
import { Pic } from '../../interfaces/pic';

@IonicPage()
@Component({
  selector: 'page-my-files',
  templateUrl: 'my-files.html',
})
export class MyFilesPage {

  myArray: Observable<Pic[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public mediaProvider: MediaProvider) {
  }

  ionViewDidLoad() {
    this.requestMyFiles();
  }

  requestMyFiles(){
    this.myArray = this.mediaProvider.getUserFiles();
    console.log(this.myArray);
  }
}
