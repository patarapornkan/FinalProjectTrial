import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bookrecord } from '../../models/bookrecord.model';
import { Time } from '../../models/timerecord.model';
import { Bookname } from '../../models/booknames.model';
import { Goals } from '../../models/goals.model';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  private tempURL='http://862b14e0d4ac.ngrok.io/';
  
  
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


  // getAllBooks(allbookData: any){
  //   return this.http.get<Bookrecord>(this.tempURL+'getallrecords').subscribe(data=>{
  //     for(let i=0; i<data.data.length; i++){
  //       allbookData.push(data.data[i]);
  //     }
  //     console.log('here2');
  //     console.log(allbookData);
  //     console.log('here2');
  //   });
  // }
  
  

  getAllBooksObs(){
    return this.http.get<Bookrecord>(this.tempURL+'getallrecords').subscribe();
  }



  // getAllBooks(){
  //   console.log("Provider going to getAllBooks");
  //   return this.http.get<Bookrecord>(this.tempURL+'getallrecords');
  // }
    

  // getAllBooks(){

  //   console.log("Provider going to getAllBooks");
  //   return this.http.get<Bookrecord>(this.tempURL+'getallrecords');
  // }

  getTotalTime(totalTime: any){
    console.log("Provider going to getTotalHours");
    return this.http.get<Time>(this.tempURL+'gettotalhrs').subscribe(data=>{
      while(totalTime.length>0){
        totalTime.pop();
      }
      totalTime.push(data.totalhr);
      //totalTime.push(data.totalmin);

      console.log(totalTime);
    })
  }

  getBookNames(bookNames:any, bookNum: any){
    return this.http.get<Bookname>(this.tempURL+'getbooknames').subscribe(data =>{
      while(bookNames.length>0){
        bookNames.pop();
      }
      while(bookNum.length>0){
        bookNum.pop()
      }

      for(let i=0; i<data.allBooks.length; i++){
        bookNames.push(data.allBooks[i]);
      }

      bookNum.push(data.num);
    })
  }

  updateGoals(newNum:number,newTime:number){
    console.log('provider going to updateGoals');
    let newgoals= newNum+'*'+newTime;
    return this.http.get(this.tempURL+'updategoals?newgoals='+newgoals).subscribe();
  }

  getGoals(currentNum:any, currentHr:any){
    console.log('provider going to getGoals');
    return this.http.get<Goals>(this.tempURL+'getgoals').subscribe(data=>{
      while(currentNum.length>0){
        currentNum.pop();
      }
      while(currentHr.length>0){
        currentHr.pop()
      }
      currentNum.push(data.numGoal);
      currentHr.push(data.hrGoal);

    });
  }

}