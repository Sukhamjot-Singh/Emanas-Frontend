import { gethospitals } from './../global';
import { MatSnackBar } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { GeneralService } from './../general.service';
import { Component, OnInit } from '@angular/core';

interface Hospital {
  hospitalname: string;
  hospitalid: string;
}

@Component({
  selector: 'app-medicalrecords',
  templateUrl: './medicalrecords.component.html',
  styleUrls: ['./medicalrecords.component.css']
})

export class MedicalrecordsComponent implements OnInit {
  otpsent: boolean = false;
  otpverified: boolean = false;
  // otp_error: boolean = false;
  // otp_verify_error: boolean = false;
  otp: string;
  hospital: string;
  report_type: string;
  records: any;
  startdate = new Date();
  enddate = new Date();
  hospitals: Hospital[];
  types: String[] = [
    "OPBMR", "IPBMR"
  ]

  constructor(private generalService: GeneralService, private spinn: NgxSpinnerService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.otpsent = false;
    // this.otpverified = false;
    this.generalService.getHospitalList().subscribe(response => {
      this.hospitals = response;
      this.spinn.hide();
      console.log(response);
    },
      (error) => {
        this.spinn.hide();
      });
  }

  create_consent() {
    this.spinn.show();
    // this.otpsent = true;
    const obj = {
      start: this.startdate.toISOString(),
      end: this.enddate.toISOString(),
      type: this.report_type,
      hospitalname: this.hospital,
    };
    console.log(obj);
    if(window.confirm('Do you want to confirm consent request?')){
    this.generalService.createconsent(obj, sessionStorage.getItem('userName')).subscribe(response => {
      const res = response;
      console.log(res);
      //TODO : Check if response has records. If so Display. Else Enter OTP.
      this.otpsent = true;
      this.spinn.hide();
    },
      (error) => {
        this.spinn.hide();
        // this.otp_error = true;
        this.snackBar.open( "OTP not sent. Please check the queries entered.", 'x', {
          duration: 5000,
        }); 
        
      });
   }
   else{
     this.otpsent=false;
   }
  }

  verify_otp() {
    this.spinn.show();
    // this.otp_error = false;
    // this.otpverified = true;
    const obj = {
      start: this.startdate.toISOString(),
      end: this.enddate.toISOString(),
      type: this.report_type,
      hospitalname: this.hospital,
    };
    console.log(this.otp);
    this.generalService.verifyconsent(obj, this.otp, sessionStorage.getItem('userName')).subscribe(response => {
      const res = response;
      console.log(response);
      this.otpverified = true;
      this.gethealthrecords();

      this.spinn.hide();
    },
      (error) => {
        this.spinn.hide();
        // this.otp_verify_error = true;
        this.snackBar.open( " OTP not entered correctly. Please enter again.", 'x', {
          duration: 5000,
        }); 
      });
  }

  gethealthrecords() {
    const obj = {
      start: this.startdate.toISOString(),
      end: this.enddate.toISOString(),
      type: this.report_type,
      hospitalname: this.hospital,
    };
    this.generalService.getrecords(sessionStorage.getItem('userName'), obj).subscribe(response => {
      const res = response;
      // this.records = res.records;
      console.log(res);
    },
      (error) => {
        this.spinn.hide();
      });
  }
}
