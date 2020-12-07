import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import {Pipe} from '@angular/core';
import { Chart } from '../../../node_modules/chart.js';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookrecord } from '../../models/bookrecord.model';
import { HttpClient } from '@angular/common/http';
import { c } from '@angular/core/src/render3';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AppResolverService } from '../../providers/app-resolver/app-resolver.service';


@Injectable()

@Pipe({name: 'round'})
export class RoundPipe {
  transform (input:number) {
    return Math.floor(input);
  }
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public all_books: any;

  @ViewChild('doughnutChart') doughnutChart;
  bars: any;
  colorArray: any;

  totalTime=[];
  allBookData=[];
  bookNames=[];
  bookNum=[];
  numGoal=[];
  hrGoal=[];
  difference:number;
  // public books$: Observable<any>;
  whatiwant=[];
  
  constructor(public appResolve: AppResolverService, public myDataProvider: DataProvider, public http: HttpClient, public navCtrl: NavController, private httpClient: HttpClient) {
  
  }



  ionViewDidLoad(){

    
    // this.http.get<Bookrecord>('http://862b14e0d4ac.ngrok.io/getallrecords').subscribe(data=>{
    //   for(let i=0; i<data.data.length; i++){
    //     this.whatiwant.push(data.data[i]);
    //   }
    //   console.log(this.whatiwant);
    // });
    // console.log(this.whatiwant);

    
    this.myDataProvider.getTotalTime(this.totalTime);
    // this.myDataProvider.getAllBooks(this.allBookData);
    console.log('here');
    // this.myDataProvider.getAllBooks(this.allBookData);
    console.log(this.allBookData.length);
    for(let item of this.allBookData) {
      console.log(item);
      }
    console.log('here');
    //console.log(this.allBookData);
    //console.log(this.totalTime);
    //console.log(this.allBookData.length);
    //console.log(this.allBookData);
    //console.log(this.allBookData[0]);
    //console.log(this.allBookData[0]);
    this.myDataProvider.getBookNames(this.bookNames, this.bookNum);
    this.myDataProvider.getGoals(this.numGoal, this.hrGoal);
    this.difference=this.hrGoal[0]-this.totalTime[0];
    // this.all_books=this.httpClient.get('http://862b14e0d4ac.ngrok.io/getallbooks').subscribe(x=>{
    //   this.all_books=x;
    //   // console.log(this.all_books);
    // })
    // this.books$=this.myDataProvider.getAllBooksObs();
    // console.log('again');
    // console.log(this.all_books);

  
    // this.books$=this.myDataProvider.getAllBooks();
    // console.log(this.books$);
  
    this.createDoughnutChart();
    console.log(this.whatiwant);
  }

  createDoughnutChart(){
      this.bars= new Chart(this.doughnutChart.nativeElement,{
      type: 'doughnut',
      data: {
        datasets: [{
          data: [10, 30],
          backgroundColor: ['rgba(96, 150, 186)','rgba(231, 236, 239)'],
      }],
        labels:['Total Time Spent on Reading','Time until your Goal']

      },
      options:{
        cutoutPercentage: 70,
        legend:{
          display:false,
        },
        animation:{
          animateRotate: true
        }
      }
    })
  }



}
