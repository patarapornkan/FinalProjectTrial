import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data'

/**
 * Generated class for the SearchBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-book',
  templateUrl: 'search-book.html',
})
export class SearchBookPage {
  bookListData:any=[];
  constructor(public myDataProvider: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  searchBook(bookname: string){
    this.myDataProvider.findBook(bookname.toLowerCase(),this.bookListData);
    console.log(this.bookListData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchBookPage');
  }

}
