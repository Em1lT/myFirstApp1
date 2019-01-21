import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
import { Pic } from '../../interfaces/pic';
import { MediaProvider } from '../../providers/media/media';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pics: any;
  picArray: Pic[] = [];
  //picArray2: Observable<Pic[]>;
  url: string = "https://media.mw.metropolia.fi/wbma/uploads/";
  constructor(public navCtrl: NavController,public http: HttpClient, public mediaProvider: MediaProvider) {

  }
  ngOnInit(){
    this.getAllFiles();
  }
  getAllFiles(){
    this.mediaProvider.getAllMedia().subscribe((data: Pic[])=> {
    console.log('data', data);
   /*A:
    this.picArray = data.map((pic: Pic) => {
      //add thumbnail property to pic
      const nameArray = pic.filename.split('.');
      console.log(nameArray);
      pic.thumbnails = {
        160: nameArray[0]+ '-tn160.png',
      }
    return pic;*/
    //B:
    data.forEach((pic:Pic) => {
      this.mediaProvider.getSingleMedia(pic.file_id)
      .subscribe((file: Pic) => {
        this.picArray.push(file);
      });
    });
  });
  }

  
  clicked(pic){
    alert("Clicked!!" + pic.file_id + pic.title);
  }
}
