import { Pipe, PipeTransform } from '@angular/core';
import { MediaProvider } from '../../providers/media/media';
import { Pic } from '../../interfaces/pic';
import { promises } from 'fs';
import { resolve } from 'path';
import { rejects } from 'assert';
/**
 * Generated class for the ThumbnailPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {
  private thumbnail = '';
  private cachedId;

  constructor(public mediaProvider: MediaProvider){

  }

  transform(id: string, ...args) {//i++
  //pure version:
    return new Promise((resolve, rejects) => {
    this.mediaProvider.getSingleMedia(id).subscribe((response: Pic) =>{
      switch(args[0]){
        case 'Large':
        resolve(response.thumbnails.w640);
        break;
        case 'medium':
        resolve(response.thumbnails.w320);
        break;
        case 'screenshot':
        resolve(response.screenshot);
        break;
        case 'small':
        resolve(response.thumbnails.w160);
        break;
      }
    });
  });
  }
}
 //impure version:
    /*   if(this.cachedId !== id){ 
    this.cachedId = id;
    return this.mediaProvider.getSingleMedia(id).subscribe((response: Pic) =>{
        switch(args[0]){
          case 'Large':
          this.thumbnail = response.thumbnails.w640;
          break;
          case 'medium':
          this.thumbnail = response.thumbnails.w320;
          break;
          case 'screenshot':
          this.thumbnail = response.screenshot;
          break;
          case 'small':
          this.thumbnail = response.thumbnails.w160;
          break;
        }
      });
    }
     // return this.thumbnail;*/
