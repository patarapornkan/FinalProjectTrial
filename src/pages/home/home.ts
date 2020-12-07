import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  totalhours: any= [5];
  allBookData=[];
  
  constructor(public myDataProvider: DataProvider, public navCtrl: NavController) {
  }

  ionViewDidLoad(){
    //this.myDataProvider.getAllBooks(this.allBookData);
    //console.log(this.allBookData)
    this.myDataProvider.getTotalHours(this.totalhours);
    for(let i=0; i<this.totalhours.length; i++){
      console.log(this.totalhours[i]);
    }
  }
    

}
