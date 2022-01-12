import { Injectable } from '@angular/core';
import * as GlobalVariables from './global';
import { environment } from 'src/environments/environment';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  constructor(private httpClient: HttpClient) { }
  headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': environment.cors });
  headers1 = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': environment.cors, 'Authorization': 'Bearer' + ' ' + sessionStorage.getItem('token') });

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', environment.cors);
    headers.append('Authorization', 'Bearer' + ' ' + sessionStorage.getItem('token'));
  }

  checkUsername(username) {
    return this.httpClient.get<any>(GlobalVariables.checkUserameUrl + '/' + username);
  }

  addRecord(formObj) {
    return this.httpClient.post<any>(GlobalVariables.addRecordUrl, formObj);
  }


  getAllRecords() {
    return this.httpClient.get<any>(GlobalVariables.getAllRecordsUrl);
  }

  getDashboardCount(reportObject, obj) {
    const path = GlobalVariables.getDashboardCountUrl + obj.userID + '/' + reportObject.fromDate + '/' + reportObject.toDate;
    return this.httpClient.get(path);
  }

  getAdminDashboardCount(reportObject) {
    const path = GlobalVariables.getAdminDashboardCountUrl + reportObject.fromDate + '/' + reportObject.toDate;
    return this.httpClient.get(path);
  }

  get7DaysCount(reportObject) {
    const path = GlobalVariables.Last7DaysUrl + reportObject.fromDate;
    return this.httpClient.get<any>(path);
  }

  getAgeCount() {
    return this.httpClient.get<any>(GlobalVariables.AgeCountUrl);
  }

  getUserRecords(userid) {
    return this.httpClient.get<any>(GlobalVariables.getUserRecords + userid);
  }

  getUpdatePassword(userId, currentPassword, newPassword) {

    const obj = {
      userId,
      currentPassword,
      newPassword
    };

    obj.userId = +userId;
    obj.currentPassword = currentPassword;
    obj.newPassword = newPassword;
    return this.httpClient.post<any[]>(GlobalVariables.updatePasswordUrl, obj);

  }

  createUser(createUserObject) {
    return this.httpClient.post<any>(GlobalVariables.createUserUrl, createUserObject);
  }
  updateUser(obj) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', 'Bearer' + ' ' + sessionStorage.getItem('token'));

    return this.httpClient.post<any>(GlobalVariables.updateUserUrl, obj, { headers });
  }
  getAllOrg() {
    return this.httpClient.get<any[]>(GlobalVariables.getOrgUrl);
  }

  getAdminOrg() {
    return this.httpClient.get<any[]>(GlobalVariables.getAdminOrgUrl + 'Admin');
  }
  getSubOrg(orgid) {
    return this.httpClient.get<any[]>(GlobalVariables.getSubOrgUrl + '/' + orgid);
  }
  getUserOrg(userId) {
    return this.httpClient.get<any[]>(GlobalVariables.getUserOrgUrl + '/' + userId + '/' + 'ACTIVE');
  }
  getAllUsers(pageIndex, pageSize) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', 'Bearer' + ' ' + sessionStorage.getItem('token'));
    let params = new HttpParams();
    params = params.append('pageSize', pageSize);
    params = params.append('pageNumber', pageIndex);
    return this.httpClient.get<any[]>(GlobalVariables.getUsersUrl, { params, headers });
  }

  getReport(reportObject): Observable<Blob> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer' + ' ' + sessionStorage.getItem('token'));
    const path = GlobalVariables.getReport + reportObject.fromDate + '/' + reportObject.toDate;
    return this.httpClient.get(path, { headers, responseType: 'blob' });
  }

  getDistrictReport(reportObject): Observable<Blob> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer' + ' ' + sessionStorage.getItem('token'));
    const path = GlobalVariables.districtReportUrl + reportObject.selectedDate;
    return this.httpClient.get(path, { headers, responseType: 'blob' });
  }

  getOrgReport(reportObject): Observable<Blob> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer' + ' ' + sessionStorage.getItem('token'));
    const path = GlobalVariables.orgReportUrl + reportObject.selectedDate;
    return this.httpClient.get(path, { headers, responseType: 'blob' });
  }

  getCsvFile(x, filename) {
    const newBlob = new Blob([x], { type: 'text/csv' });
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(newBlob);
      return;
    }
    const data = window.URL.createObjectURL(newBlob);
    const link = document.createElement('a');
    link.href = data;
    link.download = filename + '.csv';
    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    setTimeout(function () {
      window.URL.revokeObjectURL(data);
      link.remove();
    }, 100);
  }


  createconsent(obj, username) {
    // let headers = new HttpHeaders();
    // headers = headers.append('Content-Type', 'application/json');
    // headers = headers.append('Authorization', 'Bearer' + ' ' + sessionStorage.getItem('token'));
    return this.httpClient.post<any>(GlobalVariables.createconsenturl + '/' + username, obj);
  }

  verifyconsent(obj, otp, username) {
    // let headers = new HttpHeaders();
    // headers = headers.append('Content-Type', 'application/json');
    // headers = headers.append('Authorization', 'Bearer' + ' ' + sessionStorage.getItem('token'));
    console.log(obj);
    return this.httpClient.post<any>(GlobalVariables.verifyconsenturl + '/' + otp + '/' + username, obj);
  }

  getrecords(username, obj) {
    // let headers = new HttpHeaders();
    // headers = headers.append('Content-Type', 'application/json');
    // headers = headers.append('Authorization', 'Bearer' + ' ' + sessionStorage.getItem('token'));
    return this.httpClient.post<any>(GlobalVariables.createconsenturl + '/' + username, obj);
  }

  authuser(emanasId) {
    // let headers = new HttpHeaders();
    // headers = headers.append('Content-Type', 'application/json');
    // headers = headers.append('Authorization', 'Bearer' + ' ' + sessionStorage.getItem('token'));
    return this.httpClient.post<any>(GlobalVariables.authuser + '/' + emanasId, null);
  }

  verifyauth(otp) {
    // let headers = new HttpHeaders();
    // headers = headers.append('Content-Type', 'application/json');
    // headers = headers.append('Authorization', 'Bearer' + ' ' + sessionStorage.getItem('token'));
    return this.httpClient.post<any>(GlobalVariables.verifyauth + '/' + otp, null);
  }
  viewconsentsbyusername(username) {
    // let headers = new HttpHeaders();
    // headers = headers.append('Content-Type', 'application/json');
    // headers = headers.append('Authorization', 'Bearer' + ' ' + sessionStorage.getItem('token'));
    return this.httpClient.get<any>(GlobalVariables.viewconsentsbyusername + '/' + username);
  }

  getHospitalList() {
    return this.httpClient.get<any>(GlobalVariables.gethospitals);
  }

  start() {
    return this.httpClient.get<any>(GlobalVariables.start);
  }
}
