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

  picArray: Pic[];

  constructor(public http: HttpClient) {
    console.log('Hello MediaProvider Provider');
  }
  ngOnInit(){
    this.getAllMedia()
  }
  getAllMedia(){
    return this.http.get<Pic[]>('https://media.mw.metropolia.fi/wbma/media')
    .subscribe((data) =>{
      this.picArray = data;
      console.log("this",data);
    });
  }
}

