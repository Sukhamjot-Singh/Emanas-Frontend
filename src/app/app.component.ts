import { Component, OnInit } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { ConnectionService } from 'ng-connection-service';
import { GeneralService } from './general.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HelloWorld';
  isLoggedIn: any;
  status = 'ONLINE';
  isConnected = true;
  constructor(private bnIdle: BnNgIdleService, private snackBar: MatSnackBar, private router: Router,
    private authService: AuthService, private connectionService: ConnectionService, private genservice: GeneralService) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = 'ONLINE';
        this.snackBar.open('You are Online', 'x', {
          duration: 5000,
          panelClass: ['green-snackbar']
        });
      } else {
        this.snackBar.open('You are OFFLINE, Please Check your internet connection', 'x', {
          duration: 15000,
          panelClass: ['warning']
        });
        // alert("You are Offline, Please check your internet connection");
        //   this.status = "OFFLINE";
      }
    });
  }

  ngOnInit() {
    this.isLoggedIn = sessionStorage.getItem('isLoggedIn');
    this.bnIdle.startWatching(1200).subscribe((isTimedOut: boolean) => {
      if (this.authService.isLoggedIn()) {
        this.logOut();
        alert('Session Expired, Please Re-Login to continue');
      }
    });

  }

  logOut() {
    // const logoutObject = {
    //   userId: sessionStorage.getItem('userID'),
    //   sessionToken: sessionStorage.getItem('sessionToken'),
    // };
    this.authService.logout().subscribe(response => {
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['']);
    }, (error) => {
      // this.snackBar.open(error.message, 'x', {
      //   duration: 5000,
      // });
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['']);
    });
  }


}
