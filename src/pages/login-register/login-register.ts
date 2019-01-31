import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { MediaProvider } from '../../providers/media/media';
import { User, CheckUsername } from '../../interfaces/pic';
import { LoginResponse } from '../../interfaces/pic';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login-register',
  templateUrl: 'login-register.html',
  
})
export class LoginRegisterPage {

user: User = {username: null};
confirmPassword: string;
showRegis: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,
    public mediaprovider: MediaProvider) {
  }
  ngOnInit(){
    //this.checkLogin();
  }
  checkLogin(){
    if(localStorage.getItem('token')){
        this.navCtrl.push(HomePage);
    }
  }
  
  login(){
    this.mediaprovider.login(this.user).subscribe(
      (response: LoginResponse) => {
        console.log(response.user);
        this.mediaprovider.user(response.user);
        localStorage.setItem('token', response.token);
        //this.navCtrl.push(HomePage);
        this.mediaprovider.loggedIn = true;
      },
      error =>{
        console.log(error);
      }
    )
  }
  register(){
    if(this.checkPassword()){
      if(this.mediaprovider.check){
         this.mediaprovider.register(this.user).subscribe(
          (response: LoginResponse) => {
           localStorage.setItem('token', response.token);
           // this.navCtrl.push(HomePage);
            console.log(response);
          }
        )
        }else{
          alert("Username already in use");
        }
    }else{
      alert("password doesn't match");
    }
  }
  checkUser(){
    this.mediaprovider.checkIfUserExists(this.user.username).subscribe(
      (response: CheckUsername) =>{
        if(response.available){
          console.log("available");
          this.mediaprovider.check= true;
        }else{
          console.log("not available");
          alert("Username in use");
          this.mediaprovider.check = false;
        }
      }
    )
  }
  showRegister(){
    const register = document.getElementById("register");
    const login = document.getElementById("login");
    const text = document.getElementById("text");
    if(register.hidden){
      register.hidden = false;
     login.hidden = true;
    text.innerHTML ="Already have an account?";
    }else{
     register.hidden = true;
     login.hidden = false;
    }
  }
  checkPassword(){
    if(this.user.password === this.confirmPassword){
      return true;
    }else{
      return false;
    }
  }
}
