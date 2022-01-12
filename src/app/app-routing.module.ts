import { MedicalrecordsComponent } from './medicalrecords/medicalrecords.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { UpdatePassComponent } from './update-pass/update-pass.component';
import { PassGuardService } from './auth/pass-guard.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminGuardService } from './auth/admin-guard.service';
import { MHProffGuardService } from './auth/mhProff-guard.service';
import { AuthGuard } from './auth/auth.guard';
import { FillFormComponent } from './fill-form/fill-form.component';
import { ViewConsentsComponent } from './view-consents/view-consents.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'home', component: DashboardComponent, canActivate: [AuthGuard, PassGuardService, MHProffGuardService] },
  { path: 'home', component: DashboardComponent, children : [
    {path : 'userinfo' , component:UserinfoComponent , outlet : 'sidenavoutlet'},
    {path : 'medicalrecords' , component:MedicalrecordsComponent , outlet : 'sidenavoutlet'},
    {path : 'medicalrecords' , component:MedicalrecordsComponent , outlet : 'sidenavoutlet'},
    {path : 'viewconsents' , component:ViewConsentsComponent , outlet : 'sidenavoutlet'},
    {path: 'updatePass', component: UpdatePassComponent , outlet : 'sidenavoutlet'}], canActivate: [AuthGuard, PassGuardService]},
  // { path: 'addUser', component: AddUsersComponent },
  // { path: 'addUser', component: AddUsersComponent, canActivate: [AuthGuard, PassGuardService, AdminGuardService] },

  // { path: 'manageUsers', component: ManageUsersComponent, canActivate: [AuthGuard, PassGuardService, AdminGuardService] },
  // { path: 'manageUsers', component: ManageUsersComponent },

  { path: 'editUser', component: EditUserComponent },
  // { path: 'updatePass', component: UpdatePassComponent, canActivate: [AuthGuard, PassGuardService] },
  // { path: 'adminDashboard', component: AdminDashboardComponent, canActivate: [AuthGuard, PassGuardService, AdminGuardService] },
  // { path: 'adminDashboard', component: AdminDashboardComponent },

  { path: 'fillform', component: FillFormComponent},
  { path: 'register', component: RegisterComponent},

  { path: '', redirectTo: '/login', pathMatch: 'full' }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent,
  DashboardComponent,
  AddUsersComponent,
  ManageUsersComponent,
  UpdatePassComponent,
  EditUserComponent,
  AdminDashboardComponent,
  RegisterComponent
];

