import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pic, Message } from '../../interfaces/pic';
import { MediaProvider } from '../../providers/media/media';

@IonicPage()
@Component({
  selector: 'page-modify',
  templateUrl: 'modify.html',
})
export class ModifyPage {

  url: string = "https://media.mw.metropolia.fi/wbma/uploads/";
  item:Pic
  filters = {
    brightness: 100,
    contrast: 100,
    sepia: 0,
    saturation: 100,
  }
  modifed = {
    title: "",
    description: ""
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public mediaprovider: MediaProvider) {
    this.item = this.navParams.get('picture');
    console.log(this.item); 
  }
  change(){
    var styles = {
      filter: `brightness(${this.filters.brightness * 0.01}) contrast(${this.filters.contrast * 0.01})
      sepia(${this.filters.sepia * 0.01}) saturate(${this.filters.saturation * 0.01})`
      }
      return styles;
    }

    modify(){
      this.modifed.title = this.item.title;
      this.modifed.description = this.item.description;
      this.mediaprovider.updateData(this.modifed,this.item.file_id).subscribe(
        (response: Message) => {
          console.log(response);
          this.navCtrl.pop();
        });
    }

}
