import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';


/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  filedata = '';
  file: File;
  title = '';
  description = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaprovider: MediaProvider) {
  }
  handleChange($event){
    this.file = $event.target.files[0];
    this.showPreview();
  }
  showPreview(){
    const reader = new FileReader();
    reader.onloadend = () =>{
    this.filedata = reader.result;
    }
    reader.readAsDataURL(this.file);
  }
  upload(){
    console.log("dsadsadsa");
    const fd = new FormData();
    fd.append('title', this.title);
    fd.append('Description', this.description);
    fd.append('file',this.file);
    this.mediaprovider.upload(fd).subscribe(resp =>{
      console.log(resp);
      setTimeout(this.backToHome, 2000);
      
    });
    
  }
  backToHome(){
    this.navCtrl.pop().catch();
  }
}