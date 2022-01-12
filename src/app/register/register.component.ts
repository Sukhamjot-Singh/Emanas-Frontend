import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../general.service';
import { MatSnackBar } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { JSEncrypt} from 'jsencrypt';
import * as GlobalVariables from '../global';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  addUsername: any;
  addPassword;
  confirmPassword;
  isUserCreated: boolean;
  orgArray = [];
  firstName;
  lastName;
  emanasId;
  userCheckMsg;
  isAvailable: boolean;
  role;
  toggleOrg;
  hide = true;
  hide2 = true;
  passMisMatch: boolean;
  roleArr = ['MHProfessional'];
  showPrimDist: boolean;
  districtArray = GlobalVariables.districtsList;
  isOrg: boolean;
  showOther: boolean;
  reGainArr: any[];
  isDMHP: boolean;
  showNote: string;
  isSubOrgList: boolean;
  duplicateEntry: boolean;
  otpsent : boolean = false;
  otpverified : boolean = false;
  otp : string;

  constructor(private router: Router, private generalService: GeneralService,
              private snackBar: MatSnackBar, private spinn: NgxSpinnerService) { }

  ngOnInit() {
    this.role = 'MHProfessional';
  }
 
  
  cancel() {
    this.router.navigate(['login'], { replaceUrl: true });
  }
 
  

  matchPass() {
    if(this.addPassword != null)
    {
      if (this.addPassword.length > 7){
        if (this.addPassword === this.confirmPassword) {
          this.passMisMatch = false;
        } else {
        this.passMisMatch = true;
      }
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
    // this.isAvailable = true;
  }
  createUser() {
    if (this.addPassword === this.confirmPassword) {
      //TODO :Create function to send otp
      
      this.generalService.authuser(this.emanasId).subscribe(response => {
        const res = response;
        console.log(res);
        this.otpsent = true;
        this.spinn.hide();
      }, 
      (error) => {
        this.spinn.hide();
      });
    } 
     else {
      this.passMisMatch = true;
    }
  }

  verifyotp(){
    //TODO :Add function to verify otp
    this.spinn.show();
    this.generalService.verifyauth(this.otp).subscribe(response => {
      const res = response;
      console.log(res);
      this.otpverified=true;
      this.register();
      this.spinn.hide();
    }, 
    (error) => {
      this.spinn.hide();
    });
        
  }

  register(){
    this.passMisMatch = false;
          const encrypt = new JSEncrypt();
          encrypt.setPublicKey(GlobalVariables.rsapublicKey);
          const encrypted = encrypt.encrypt(this.addPassword);
          const obj = {
            username: this.addUsername,
            password: encrypted,
            firstName: this.firstName,
            lastName: this.lastName,
            eManasID :this.emanasId,
            status: 'ACTIVE',
          };
          console.log(obj);
          this.generalService.createUser(obj).subscribe(response => {
            const res = response;
            this.isUserCreated = true;
            this.spinn.hide();
          }, (error) => {
            this.spinn.hide();
          });
  }
}
