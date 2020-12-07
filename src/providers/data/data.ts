import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Bookrecord } from '../../models/bookrecord.model';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  private tempURL='http://32d5bfc5b151.ngrok.io/';

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  insertReading(all_data: string){
    console.log("PROVIDER"+ all_data);
    return this.http.get(this.tempURL+'addreading?all_data='+all_data).subscribe();
  }

  findBook(bookname: string, bookListData: any){
    console.log("PROVIDER"+bookname);
    return this.http.get<Bookrecord>(this.tempURL+'findbook?bookname='+bookname).subscribe(data => {
      if(bookListData.length>0){
        while(bookListData.length>0){
          bookListData.pop();
        }
      }
      for (let i=0; i<data.data.length; i++)
        bookListData.push(data.data[i]);
        // console.log(bookListData);
    });
  }

  getAllBooks(allBookData: any){
    console.log("Provider going to getAllBooks");
    return this.http.get<Bookrecord>(this.tempURL+'getallrecords').subscribe(data =>{
      while(allBookData.length>0){
        allBookData.pop();
      }

      for(let i=0; i<data.data.length; i++)
        allBookData.push(data.data[i]);

    })
  }

  getTotalHours(totalhours: any){
    console.log("Provider going to getTotalHours");
    return this.http.get<Bookrecord>(this.tempURL+'gettotalhrs').subscribe(data=>{
      totalhours.push(data.data);
      console.log(totalhours);
    })
  }

}