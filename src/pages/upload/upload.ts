import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';
import { style } from '@angular/core/src/animation/dsl';
import { Chooser } from '@ionic-native/chooser';

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
  blob: any;
  filters = {
    brightness: 100
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaprovider: MediaProvider,
    public loadingCtrl: LoadingController, private chooser: Chooser) {
  }
  //not used in the chooser assignment
  /*handleChange($event){
    this.file = $event.target.files[0];
    this.showPreview();
  }*/
  showPreview(){
    const reader = new FileReader();
    reader.onloadend = () =>{
    this.blob = reader.result;
    }
    reader.readAsDataURL(this.blob);
  }
  upload(){
    const fd = new FormData();
    fd.append('title', this.title);
    fd.append('Description', this.description);
    fd.append('file',this.blob);
    this.mediaprovider.upload(fd).subscribe(resp =>{
     this.Loading();
    });
  }
  Loading() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait'
    });
  
    loading.present();
  

    setTimeout(() => {
      this.navCtrl.pop();
      loading.dismiss();
    }, 2000);
  }
  change(){
    console.log(this.filters.brightness);
    return {
      'brightness': this.filters.brightness
      }
    }
    choose(){
      this.chooser.getFile("yeah")
      .then(file => {
        console.log(file ? file.name : 'canceled')
        this.blob = new Blob([file.data], {
          type: file.mediaType
          
        });
        this.showPreview();
      })
      .catch((error: any) => console.error(error));
    }
}