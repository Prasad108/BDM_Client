import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppSettings} from 'app/appSettings';
import {Challan} from '../models/Challan';
import { CbDetails } from '../models/CbDetails';
import { Book } from '../models/Book';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

interface CbDetailsInterface {
  name:    string;
  age:     number;
  created: Date;
}
@Injectable({
  providedIn: 'root'
})
export class CbDetailsService {
  private _updateCbDetailsURL = AppSettings.API_ENDPOINT + '/cbDetails/';
  private _getCbDetailFromChallanWithRequestedNameLangTypeURL = AppSettings.API_ENDPOINT
  + '/cbDetails/getCbDetailFromChallanWithRequestedNameLangType/';
  private _getInwardCbDetailFromChallanWithRequestedNameLangTypeURL = AppSettings.API_ENDPOINT
  + '/cbDetails/getInwardCbDetailFromChallanWithRequestedNameLangType/';

  private tempChallan: Challan;
  constructor(private http: HttpClient) { }
  private data: JSON;
  private obj: any;
 challan: Challan;
  updateCbdetails(cbDetails: CbDetails) {
    const temp = cbDetails.challan;
    if (typeof temp === 'number' ) {
      (<Challan>cbDetails.challan) = {
        id: <number>cbDetails.challan
      };
    }
    return this.http.put<CbDetails>(this._updateCbDetailsURL + cbDetails.id, cbDetails, httpOptions);
  }
  getCbDetailFromChallanWithRequestedNameLangType(challan, name, lang , type): Observable<any> {
    return this.http.get<any>(this._getCbDetailFromChallanWithRequestedNameLangTypeURL
      + challan + '/' + name + '/' + lang + '/' + type);
  }

  getInwardCbDetailFromChallanWithRequestedNameLangType(challan, name, lang , type): Observable<any> {
    return this.http.get<any>(this._getInwardCbDetailFromChallanWithRequestedNameLangTypeURL
      + challan + '/' + name + '/' + lang + '/' + type);
  }
}
