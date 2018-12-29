import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppSettings} from 'app/appSettings';
import {Challan} from '../models/Challan';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ChallanService {

  constructor(private http: HttpClient) { }

  private challanListOfUserCenterURL = AppSettings.API_ENDPOINT + '/challan/detailedChallnListForUsersCenter';

  getChallanListOfUsersCenter(): Observable<Challan[]> {
    return this.http.get<Challan[]>(this.challanListOfUserCenterURL);
  }

}
