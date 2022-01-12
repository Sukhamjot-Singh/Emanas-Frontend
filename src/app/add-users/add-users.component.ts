import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../general.service';
import { MatSnackBar } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { JSEncrypt} from 'jsencrypt';
import * as GlobalVariables from '../global';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  addUsername: any;
  addPassword;
  confirmPassword;
  isUserCreated: boolean;
  orgArray = [];
  firstName;
  lastName;
  phoneNumber;
  emailId;
  userCheckMsg;
  isAvailable: boolean;
  role;
  toggleOrg;
  hide = true;
  hide2 = true;
  orgObj;
  passMisMatch: boolean;
  roleArr = ['MHProfessional'];
  newOrg = {
    org_id: '',
    org_remarks: '',
    status: 'ACTIVE'
  };
  newOrgObj;
  newSubOrgObj;
  orgArr = [];
  subOrgArr = [];
  dispOrgArr = [];
  dispOrg = {
    orgName: '',
    subOrgName: '',
    org_remarks: ''
  };
  desgN;
  showPrimDist: boolean;
  districtArray = GlobalVariables.districtsList;
  isOrg: boolean;
  showOther: boolean;
  reGainArr: any[];
  isDMHP: boolean;
  showNote: string;
  isSubOrgList: boolean;
  duplicateEntry: boolean;


  constructor(private router: Router, private generalService: GeneralService,
              private snackBar: MatSnackBar, private spinn: NgxSpinnerService) { }

  ngOnInit() {
    this.role = 'MHProfessional';
  }
 
  
  cancel() {
    this.router.navigate(['manageUsers'], { replaceUrl: true });
  }
 
  

  matchPass() {
    if (this.addPassword.length > 7) {
      if (this.addPassword === this.confirmPassword) {
        this.passMisMatch = false;
       } else {
      this.passMisMatch = true;
    }
  }
}
userCheck() {
    if ( this.addUsername.length > 5) {
      this.spinn.show();
      this.generalService.checkUsername(this.addUsername).subscribe(response => {
        const res = response;
        this.isAvailable = true;
        this.userCheckMsg = res.message;
        this.spinn.hide();
      }, (error) => {
        this.spinn.hide();
        this.isAvailable = false;
        this.userCheckMsg = 'Username already taken';
        //  error[`message`];
      });
    }
  }
  createUser() {
    if (this.addPassword === this.confirmPassword) {
      this.spinn.show();
      this.passMisMatch = false;
      const encrypt = new JSEncrypt();
      encrypt.setPublicKey(GlobalVariables.rsapublicKey);
      const encrypted = encrypt.encrypt(this.addPassword);
      const obj = {
        username: this.addUsername,
        password: encrypted,
        email: this.emailId,
        firstName: this.firstName,
        lastName: this.lastName,
        mobileNo: this.phoneNumber,
        role: this.role,
        status: 'ACTIVE',
        designation: this.desgN,
        userOrg: this.orgArr
      };
      this.generalService.createUser(obj).subscribe(response => {
        const res = response;
        this.isUserCreated = true;
        this.spinn.hide();
      }, (error) => {
        this.spinn.hide();
      });
    } else {
      this.passMisMatch = true;
    }
  }
}
