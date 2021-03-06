import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {AppSettings} from 'app/appSettings';
import {Challan} from '../models/Challan';
import { CbDetails } from '../models/CbDetails';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ChallanService {

  constructor(private http: HttpClient) { }

  private challanListOfUserCenterURL = AppSettings.API_ENDPOINT + '/challan/detailedChallnListForUsersCenter';
  private inwardChallanListOfUserCenterURL = AppSettings.API_ENDPOINT + '/challan/inward/detailedChallnListForUsersCenter';
  private listOfUserSpecificChallanURL = AppSettings.API_ENDPOINT + '/challan/userSpecificChallanList';
  private challanURL = AppSettings.API_ENDPOINT + '/challan/detailed/';
  private createNewChallanURL = AppSettings.API_ENDPOINT + '/challan/new/';
  private creatNewInwardChallanURL = AppSettings.API_ENDPOINT + '/challan/inward/new/';
  private addNewBookToChallan_URL = AppSettings.API_ENDPOINT + '/cbDetails/';
  private getChallanById_URL = AppSettings.API_ENDPOINT + '/challan/';
  private saveChallan_URL = AppSettings.API_ENDPOINT + '/challan/';
  private checkIfChallanIsSettled_URL = AppSettings.API_ENDPOINT + '/challan/checkIfChallanIsSettled/';
  private addToInventory_URL = AppSettings.API_ENDPOINT + '/challan/addToInventory/';
  getChallanListOfUsersCenter(): Observable<Challan[]> {
    return this.http.get<Challan[]>(this.challanListOfUserCenterURL);
  }

  getInwardChallanListOfUsersCenter(): Observable<Challan[]> {
    return this.http.get<Challan[]>(this.inwardChallanListOfUserCenterURL);
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

  creatNewInwardChallan(): Observable<Challan> {
    return this.http.get<Challan>(this.creatNewInwardChallanURL);
  }

  addNewBookToChallan(cb: any): Observable<CbDetails> {
    return this.http.put<CbDetails>(this.addNewBookToChallan_URL, cb, AppSettings.HTTP_OPTIONS);
  }

  getChallanById(id): Observable<Challan> {
    return this.http.get<Challan>(this.getChallanById_URL + id);
  }

  saveChallan(challan: Challan): Observable<Challan> {
    const tempuserByIssuedTo: User = new User();
    (<number> tempuserByIssuedTo.id) = <number> challan.userByIssuedTo;
    const tempuserByIssuedBy: User = new User();
    (<number> tempuserByIssuedBy.id) = <number> challan.userByIssuedBy;
    (<User>challan.userByIssuedTo) = tempuserByIssuedTo;
    (<User>challan.userByIssuedBy) = tempuserByIssuedBy;
    return this.http.put<Challan>(this.saveChallan_URL + challan.id, challan, AppSettings.HTTP_OPTIONS);
  }

  checkIfChallanIsSettled(id: any): Observable<boolean> {
    return this.http.get<boolean>(this.checkIfChallanIsSettled_URL + id).pipe(
      map(data => !data)
    );
  }

  addToInventory(id: any): Observable<Challan> {
    return this.http.get<Challan>(this.addToInventory_URL + id);
  }

}
