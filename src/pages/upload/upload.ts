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
    brightness: 100,
    contrast: 100,
    sepia: 0,
    saturation: 100,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaprovider: MediaProvider,
    public loadingCtrl: LoadingController, private chooser: Chooser) {
  }
  showPreview(){
    const reader = new FileReader();
    reader.onloadend = () =>{
    this.blob = reader.result;
    }
    reader.readAsDataURL(this.blob);
  }
  upload(){
    this.description = "Brightness: "+this.filters.brightness+". Contrast: "+ this.filters.contrast+". Sepia:"+
    this.filters.sepia+". Saturate: "+ this.filters.saturation;
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
    var styles = {
      filter: `brightness(${this.filters.brightness * 0.01}) contrast(${this.filters.contrast * 0.01})
      sepia(${this.filters.sepia * 0.01}) saturate(${this.filters.saturation * 0.01})`
      }
      return styles;
    }
    //Chooser plugin was used to get the file.
    choose(){
      this.chooser.getFile("image/*")
      .then(file => {
        this.blob = new Blob([file.data], {
          type: file.mediaType
        });
        this.showPreview();
      })
      .catch((error: any) => console.error(error));
    }
}

     //not used in the chooser assignment
  /*handleChange($event){
    this.file = $event.target.files[0];
    this.showPreview();
  }*/ 