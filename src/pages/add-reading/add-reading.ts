import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data'

/**
 * Generated class for the AddReadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-reading',
  templateUrl: 'add-reading.html',
})
export class AddReadingPage {

  constructor(public myDataProvider: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
    console.log('Start');
    console.log('Finished');
  }

  addNewReading(weekday:string, duration:number, name: string, ymd:string, memo:string){
    let all_data:string= weekday+'*'+duration+'*'+name+'*'+ymd+'*'+memo;
    console.log('new'+all_data);
    this.myDataProvider.insertReading(all_data);
  }

  addReading(name: string, ymd: string, weekday: string, duration: number, memo: string){
    let all_data:string=ymd+'*'+weekday+'*'+duration+'*'+name+'*'+memo;
    console.log('old'+all_data);
    this.myDataProvider.insertReading(all_data);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReadingPage');
  }

}
