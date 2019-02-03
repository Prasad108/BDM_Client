import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppSettings} from 'app/appSettings';
import { User } from './../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  private createAdmin_URL = AppSettings.API_ENDPOINT + '/api/auth/signup';

  private allUserOfcurrentUsersCenter = AppSettings.API_ENDPOINT + '/user/allUserOfcurrentUsersCenter';
  private listOfUserSpecificChallanURL = AppSettings.API_ENDPOINT + '/challan/userSpecificChallanList';
  private challanURL = AppSettings.API_ENDPOINT + '/challan/detailed/';
  private getUsersOfCenterByCenterId_URL = AppSettings.API_ENDPOINT + '/user/getUsersOfCenterByCenterId/';

  constructor(private http: HttpClient) { }


  getAllUserOfCurrentUsersCenter(): Observable<User[]> {
    return this.http.get<User[]>(this.allUserOfcurrentUsersCenter, AppSettings.HTTP_OPTIONS);
  }

  getUsersOfCenterByCenterId(id): Observable<User[]> {
    return this.http.get<User[]>(this.getUsersOfCenterByCenterId_URL + id , AppSettings.HTTP_OPTIONS);
  }

  createAdmin(user): Observable<any> {
    return this.http.post(this.createAdmin_URL, user, AppSettings.HTTP_OPTIONS);
  }
}
