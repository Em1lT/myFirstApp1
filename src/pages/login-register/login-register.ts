import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { MediaProvider } from '../../providers/media/media';
import { User } from '../../interfaces/pic';
import { LoginResponse } from '../../interfaces/pic';
import { HomePage } from '../home/home';

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
  ngOnInit(){
    this.checkLogin();
  }
  checkLogin(){
    if(localStorage.getItem('token')){
        this.navCtrl.push(HomePage);
    }
  }
  login(){
    this.mediaprovider.login(this.user).subscribe(
      (response: LoginResponse) => {
        console.log(response);
        localStorage.setItem('token', response.token);
        this.navCtrl.push(HomePage);
        this.mediaprovider.loggedIn = true;
      },
      error =>{
        console.log(error);
      }
    )
  }
  register(){
    this.mediaprovider.checkIfUserExists(this.user).subscribe(
      (response: LoginResponse) => {
        console.log(response);
         this.mediaprovider.register(this.user).subscribe(
          (response: LoginResponse) => {
            localStorage.setItem('token', response.token);
            this.navCtrl.push(HomePage);
            console.log(response);
          },
          error=>{
            console.log(error);
          }
        )
      },
      error=>{
        console.log(error);
      }
    )
  }
}
