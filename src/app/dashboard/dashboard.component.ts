import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../general.service';
import { DatePipe } from '@angular/common';
import { Color, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType,} from 'chart.js';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private gs: GeneralService, private authService: AuthService) { }
  role: string;
  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    
  }
  fillForm() {
    if(this.authService.isLoggedIn()) {
      this.router.navigate(['fillform']);
    } else {
      this.authService.logout();
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['login']);
    }
  }

  

 

  

   
   

}


