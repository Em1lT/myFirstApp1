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
  username: string;
  user_id: number;
  fullname: string;
  avatar: String;
  check: boolean =false;
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
  checkIfUserExists(name){
      return this.http.get(this.configUrl+ "/users/username/"+name);
  }
  user(user:User){
    this.username = user.username;
    this.fullname = user.full_name;
    this.user_id = user.user_id;
  }

  upload(data: any){
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token': localStorage.getItem('token'),
      })
    };
    return this.http.post<LoginResponse>(this.configUrl+ "/media", data,httpOptions)
  }
  
 
}