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
  bookNames=[];
  bookNum=[];
  isShowBookList:boolean=false;
  buttonText:string= 'SHOW BOOKLIST';
  constructor(public myDataProvider: DataProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  searchBook(bookname: string){
    this.myDataProvider.findBook(bookname.toLowerCase(),this.bookListData);
    // document.getElementById('bookList').style.display='none';
    console.log(this.bookListData);
  }

  showBookList(){
    this.isShowBookList= !this.isShowBookList;
    if(this.isShowBookList){
      this.buttonText='HIDE BOOKLIST';
      document.getElementById('bookList').style.display='block';
      console.log('change to show');
    } else{
      this.buttonText='SHOW BOOKLIST';
      document.getElementById('bookList').style.display='none';
      console.log('change to hide');
    }
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad SearchBookPage');
    this.myDataProvider.getBookNames(this.bookNames, this.bookNum);
  }

}
