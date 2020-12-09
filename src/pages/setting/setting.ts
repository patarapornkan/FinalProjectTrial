import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Goals } from '../../models/goals.model';
import { Observable } from 'rxjs';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  currentNum=[];
  currentHr=[];

  constructor(public myDataProvider: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  updategoals(newNum: number, newTime: number){
    console.log('updategoals is called');
    this.myDataProvider.updateGoals(newNum, newTime);
    console.log('going to change displayed goal')
    this.myDataProvider.getGoals(this.currentNum, this.currentHr);
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad SettingPage');
    this.myDataProvider.getGoals(this.currentNum, this.currentHr);
  }

}
