import { MatSnackBar } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { GeneralService } from './../general.service';
import { Component, OnInit } from '@angular/core';
interface consent{
  consentRequestid: string;
  consentid: string;
​  end: string;
​​  hospitalname: string;
​​  start: string;
​​  tableid: string;
​​  timestamp: string;
​​  type: string;
​​  userID: string;
}
@Component({
  selector: 'app-view-consents',
  templateUrl: './view-consents.component.html',
  styleUrls: ['./view-consents.component.css']
})
export class ViewConsentsComponent implements OnInit {
  consents:consent[];
  constructor(private generalService: GeneralService,private spinn: NgxSpinnerService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.generalService.viewconsentsbyusername(sessionStorage.getItem('userName')).subscribe(response => {
      this.consents= response;
      console.log(this.consents[1]);

      this.spinn.hide();
    }, 
    (error) => {
      this.spinn.hide();
    });
  }

  viewallconsents()
  {    
    
  }

}
