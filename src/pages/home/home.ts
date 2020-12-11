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

  @ViewChild('doughnutChartTime') doughnutChartTime;
  @ViewChild('doughnutChartNum') doughnutChartNum;

  bars: any;
  colorArray: any;

  totalTime=[];
  bookNum=[];
  numGoal=[];
  hrGoal=[];
  timePercent:number;
  numPercent:number;
  allBookData=[];
  bookNames=[];
  timeTillGoal:number;
  numTillGoal: number;

  
  constructor(public myDataProvider: DataProvider, public http: HttpClient, public navCtrl: NavController, private httpClient: HttpClient) {
  
  }


  ionViewDidEnter(){
    this.myDataProvider.getTotalTime(this.totalTime);  
    this.myDataProvider.getBookNames(this.bookNames, this.bookNum);
    this.myDataProvider.getGoals(this.numGoal, this.hrGoal);
    this.getChartData();
  }

  createDoughnutChartTime(timeSpentCh:number,timeGoalCh:number){
      this.bars= new Chart(this.doughnutChartTime.nativeElement,{
      type: 'doughnut',
      data: {
        datasets: [{
          data: [timeSpentCh, timeGoalCh],
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
        },
        responsive: true,
        maintainAspectRatio: false,
      }
    })
  }

  createDoughnutChartNum(bookNumCh:number,bookGoalCh:number){
    this.bars= new Chart(this.doughnutChartNum.nativeElement,{
    type: 'doughnut',
    data: {
      datasets: [{
        data: [bookNumCh, bookGoalCh],
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
      },
      responsive: true,
      maintainAspectRatio: false
    }
  })
}

  getChartData(){
    this.http.get<Bookrecord>(this.myDataProvider.tempURL+'getdataprogresscharts').subscribe(this.observerChartData);
  }

  observerChartData={
    next: data=>{
      console.log(data.data);
      let timeSpentCh:number=data.data['timeSpent'];
      let timeGoalCh:number= data.data['hrGoal'];
      this.timeTillGoal= timeGoalCh-timeSpentCh;
      this.timePercent= data.data['timePercent'];
      if(this.timePercent>100){
        timeSpentCh=100;
        this.timeTillGoal=0;
      }
      let bookNumCh:number= data.data['numRead'];
      let bookGoalCh:number= data.data['numGoal'];
      this.numTillGoal= bookGoalCh- bookNumCh;
      this.numPercent= data.data['numPercent'];
      if(this.numPercent>100){
        bookNumCh=100;
        this.numTillGoal=0;
      }
      this.createDoughnutChartTime(timeSpentCh,this.timeTillGoal);
      this.createDoughnutChartNum(bookNumCh,this.numTillGoal);
    },
    error: err=>console.error('Observer got an error: '+err),
    complete:()=>{
      console.log('Observer got a complete notification');
    }
  }
}
