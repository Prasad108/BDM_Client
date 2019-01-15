import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppSettings} from 'app/appSettings';
import { User } from './../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/api/test/user';
  private pmUrl = 'http://localhost:8080/api/test/pm';
  private adminUrl = 'http://localhost:8080/api/test/admin';

  private allUserOfcurrentUsersCenter = AppSettings.API_ENDPOINT + '/user/allUserOfcurrentUsersCenter';
  private listOfUserSpecificChallanURL = AppSettings.API_ENDPOINT + '/challan/userSpecificChallanList';
  private challanURL = AppSettings.API_ENDPOINT + '/challan/detailed/';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }

  getAllUserOfCurrentUsersCenter(): Observable<User[]> {
    return this.http.get<User[]>(this.allUserOfcurrentUsersCenter, AppSettings.HTTP_OPTIONS);
  }
}
