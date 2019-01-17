import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
import { Pic } from '../../interfaces/pic';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  picArray: Pic[];

  constructor(public navCtrl: NavController,public http: HttpClient) {

  }
  ngOnInit(){
    this.getPic()
  }
  getPic(){
    return this.http.get<Pic[]>('../../assets/test.json')
    .subscribe((data) => this.picArray = data);
  }
  clicked(){
    alert("Clicked!!")
  }
}
