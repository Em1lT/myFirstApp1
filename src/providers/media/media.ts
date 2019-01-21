import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pic } from '../../interfaces/pic';
/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {
  configUrl = 'https://media.mw.metropolia.fi/wbma';
  picArray: Pic[];

  constructor(public http: HttpClient) {
    
  }
  
  getAllMedia(){
    return this.http.get<Pic[]>(this.configUrl + '/media');
  }
  getSingleMedia(id){
    return this.http.get<Pic>(this.configUrl + '/media/'+ id);
  }
}