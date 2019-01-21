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

  pics: any;
  picArray: Pic[];
  url: string = "https://media.mw.metropolia.fi/wbma/uploads/";
  constructor(public navCtrl: NavController,public http: HttpClient, public mediaProvider: MediaProvider) {

  }
  ngOnInit(){
    this.getAllFile();
  }
  getAllFile(){
    this.mediaProvider.getAllMedia().subscribe((data: Pic[])=> {
    console.log('data', data);
    this.picArray = data.map((pic: Pic) => {
      //add thumbnail property to pic
      const nameArray = pic.filename.split('.');
      console.log(nameArray);
      pic.thumbnails = {
        160: nameArray[0]+ '-tn160.png',
      }

    return pic;
    });
  });
  }

  
  clicked(){
    alert("Clicked!!");
  }
}
