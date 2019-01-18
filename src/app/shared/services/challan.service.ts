import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppSettings} from 'app/appSettings';
import {Challan} from '../models/Challan';


@Injectable({
  providedIn: 'root'
})
export class ChallanService {

  constructor(private http: HttpClient) { }

  private challanListOfUserCenterURL = AppSettings.API_ENDPOINT + '/challan/detailedChallnListForUsersCenter';
  private listOfUserSpecificChallanURL = AppSettings.API_ENDPOINT + '/challan/userSpecificChallanList';
  private challanURL = AppSettings.API_ENDPOINT + '/challan/detailed/';
  private createNewChallanURL = AppSettings.API_ENDPOINT + '/challan/new/';
  getChallanListOfUsersCenter(): Observable<Challan[]> {
    return this.http.get<Challan[]>(this.challanListOfUserCenterURL);
  }

 getListOfUserSpecificChallan (): Observable<Challan[]> {
   return this.http.get<Challan[]>(this.listOfUserSpecificChallanURL);
 }

  getDetailedChallan(id): Observable<Challan> {
    return this.http.get<Challan>(this.challanURL + id);
  }

  creatNewChallan(id: number): Observable<Challan> {
    return this.http.post<Challan>(this.createNewChallanURL + id, '', AppSettings.HTTP_OPTIONS);
  }

}
