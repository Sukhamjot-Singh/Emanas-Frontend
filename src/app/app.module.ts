import { MAT_DATE_LOCALE } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy, DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { AppMaterialModule } from './app_material/app-material.module';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { BnNgIdleService } from 'bn-ng-idle';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { TokenInterceptor } from '../app/services/token.interceptor';
import { SortPipe } from '../app/utilities/sort-pipe';
import { UpdatePassComponent } from './update-pass/update-pass.component';
import { PassGuardService } from '../app/auth/pass-guard.service';
import { AdminGuardService } from '../app/auth/admin-guard.service';
import { MHProffGuardService } from '../app/auth/mhProff-guard.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { FillFormComponent } from './fill-form/fill-form.component';
import { RegisterComponent } from './register/register.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { MedicalrecordsComponent } from './medicalrecords/medicalrecords.component';
import { ViewConsentsComponent } from './view-consents/view-consents.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    AddUsersComponent,
    ManageUsersComponent,
    SortPipe,
    UpdatePassComponent,
    EditUserComponent,
    AdminDashboardComponent,
    FillFormComponent,
    RegisterComponent,
    UserinfoComponent,
    MedicalrecordsComponent,
    ViewConsentsComponent,
  ],
  imports: [
   
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AppRoutingModule,
    RouterModule,
    AppMaterialModule,
    ChartsModule
 
  ],
  providers: [
    AuthGuard,
    AuthService,
    DatePipe,
    NgxSpinnerService,
    NgxSpinnerModule,
    PassGuardService,
    MHProffGuardService,
    AdminGuardService,
    BnNgIdleService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
