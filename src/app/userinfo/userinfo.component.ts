import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../general.service';
import { MatSnackBar } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  userObj: any;
  name : string;
  username : string;
  isUpdated: boolean;
  orgArray = [];
  phoneNumber;
  emailId;
  emanasId;
  created_at;
  showOther: boolean;
  duplicateEntry: boolean;

  constructor(private router: Router, private generalService: GeneralService,
    private snackBar: MatSnackBar, private spinn: NgxSpinnerService) { }

  ngOnInit() {
    this.name = sessionStorage.getItem("name");
    this.username = sessionStorage.getItem("userName");
  }

    //TODO : Function to get User details from backend 

}
