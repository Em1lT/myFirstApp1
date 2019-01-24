import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { MediaProvider } from '../../providers/media/media';
import { User } from '../../interfaces/pic';
import { LoginResponse } from '../../interfaces/pic';

@IonicPage()
@Component({
  selector: 'page-login-register',
  templateUrl: 'login-register.html',
  
})
export class LoginRegisterPage {

user: User = {username: null};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,
    public mediaprovider: MediaProvider) {
  }

  login(){
    this.mediaprovider.login(this.user).subscribe(
      (response: LoginResponse) => {
        console.log(response);
        localStorage.setItem('token', response.token);
        console.log("Storage set");
        this.mediaprovider.loggedIn = true;
      },
      error =>{
        console.log(error);
      }
    )

  }
}
