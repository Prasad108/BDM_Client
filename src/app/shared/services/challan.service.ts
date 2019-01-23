import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppSettings} from 'app/appSettings';
import {Challan} from '../models/Challan';
import { CbDetails } from '../models/CbDetails';
import { User } from '../models/User';

interface LooseObject {
  [key: string]: any;
}
@Injectable({
  providedIn: 'root'
})
export class ChallanService {

  constructor(private http: HttpClient) { }

  private challanListOfUserCenterURL = AppSettings.API_ENDPOINT + '/challan/detailedChallnListForUsersCenter';
  private listOfUserSpecificChallanURL = AppSettings.API_ENDPOINT + '/challan/userSpecificChallanList';
  private challanURL = AppSettings.API_ENDPOINT + '/challan/detailed/';
  private createNewChallanURL = AppSettings.API_ENDPOINT + '/challan/new/';
  private addNewBookToChallan_URL = AppSettings.API_ENDPOINT + '/cbDetails/';
  private getChallanById_URL = AppSettings.API_ENDPOINT + '/challan/';
  private saveChallan_URL = AppSettings.API_ENDPOINT + '/challan/';
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

  addNewBookToChallan(cb: any): Observable<CbDetails> {
    return this.http.put<CbDetails>(this.addNewBookToChallan_URL, cb, AppSettings.HTTP_OPTIONS);
  }

  getChallanById(id): Observable<Challan> {
    return this.http.get<Challan>(this.getChallanById_URL + id);
  }

  saveChallan(challan: Challan): Observable<Challan> {
    // issuedTo.id = <number> challan.userByIssuedTo;
    // challan.userByIssuedTo = issuedTo;
    // issuedBy.id = <number> challan.userByIssuedBy;
    // challan.userByIssuedBy = issuedBy;


    let obj = challan;
     (<LooseObject>obj.userByIssuedTo).id = <number> challan.userByIssuedTo;
     (<LooseObject>obj.userByIssuedBy).id = <number> challan.userByIssuedBy;
    //  challan.userByIssuedBy;
    return this.http.put<Challan>(this.saveChallan_URL + challan.id, obj, AppSettings.HTTP_OPTIONS);
  }

}
