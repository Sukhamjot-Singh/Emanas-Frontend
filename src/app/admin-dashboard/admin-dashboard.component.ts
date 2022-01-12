import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { GeneralService } from '../general.service';
import { Color, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType,} from 'chart.js';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

public lineChartType = 'line';
  public lineChartPlugins = [];

  

  fromDate: any;
  toDate: any;
  countArray: any;
  followupPercentage;
  today: any;



public DoughnutChartOptions: any = {
legend: {
  position: 'bottom',
  display: false,
  labels: {
    padding: 20,
    boxWidth: 20,
  },
},
};


  constructor(private router: Router, private gs: GeneralService) { }

  ngOnInit() {
    this.fromDate = new Date();
    this.toDate = new Date();
    this.today = new Date();
   
  }

  
  manageUsers() {
    this.router.navigate(['manageUsers']);
  }

 



}
