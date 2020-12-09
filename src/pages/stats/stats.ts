import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Bookrecord } from '../../models/bookrecord.model';
import { Injectable } from '@angular/core';
import { DataProvider } from '../../providers/data/data'

/**
 * Generated class for the StatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Injectable()
@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {
  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;
  showWeekChart: boolean= true;
  weekLabels=['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  monthLabels=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];

  constructor(public myDataProvider: DataProvider, public http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidEnter(){
    console.log('ionViewDidEnter StatsPage');
    this.getWeekandMonthChartData();
  }

  getWeekandMonthChartData(){
    this.http.get<Bookrecord>(this.myDataProvider.tempURL+'getWeekandMonthChartData').subscribe(this.observerWeekandMonthData);
  }

  observerWeekandMonthData={
    next: data=>{
      if(this.showWeekChart){
        this.createChart(data['weekData']);
      } else{
        this.createChart(data['monthData']);
      }
    }
  }

  createChart(data: any){
    let labelsToUse=[];
    console.log(data);
    if(this.showWeekChart){
      labelsToUse=this.weekLabels;
    }else{
      labelsToUse=this.monthLabels;
    }
    Chart.defaults.global.defaultFontFamily='Lato';
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: labelsToUse,
        datasets: [{
          label: 'Time spent on Reading in hours',
          data: data,
          backgroundColor: 'rgb(96, 150, 186)'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            }
          }]
        },
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  }

  showWeek(){
    this.bars.destroy();
    this.showWeekChart=true;
    document.getElementById('weekButton').style.color= 'white';
    document.getElementById('monButton').style.color= '#a3cef1';
    this.getWeekandMonthChartData();
  }

  showMonth(){
    this.bars.destroy();
    this.showWeekChart=false;
    document.getElementById('weekButton').style.color= '#a3cef1';
    document.getElementById('monButton').style.color= 'white';
    this.getWeekandMonthChartData();
  }




}
