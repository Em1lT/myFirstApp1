import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pic, User, LoginResponse } from '../../interfaces/pic';
/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {
  configUrl = 'https://media.mw.metropolia.fi/wbma';
  picArray: Pic[];

  loggedIn = false;
  
  constructor(public http: HttpClient) {
    
  }
  
  getAllMedia(){
    return this.http.get<Pic[]>(this.configUrl + '/media');
  }
  getSingleMedia(id){
    return this.http.get<Pic>(this.configUrl + '/media/'+ id);
  }
  login(user: User){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    };
    return this.http.post<LoginResponse>(this.configUrl+ "/login", user,httpOptions)
  }
  register(user:User){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    };
    return this.http.post<LoginResponse>(this.configUrl+ "/users", user,httpOptions)
  }
  checkIfUserExists(user:User){
      return this.http.get(this.configUrl+ "/users/username/"+user.username)
  }
}