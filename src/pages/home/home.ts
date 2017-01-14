import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

export class ImagePath {
    constructor(
        public path: string) { }
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    list = [
        new ImagePath("img/img1.jpg"),
        new ImagePath("img/img2.jpg"),
        new ImagePath("img/img3.jpg")
    ];

    moveToCamera(){

    }
  constructor(public navCtrl: NavController) {
  }

}


