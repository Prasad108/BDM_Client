import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppSettings} from 'app/appSettings';
import {Challan} from '../models/Challan';
import { CbDetails } from '../models/CbDetails';


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
  private tempChallan: Challan;
  constructor(private http: HttpClient) { }
  private data: JSON;
  private obj: any;
  updateCbdetails(cbDetails: CbDetails) {
    this.obj = {
        'id' : cbDetails.id ,
        'book': {'id': cbDetails.book.id },
        'challan': {'id': cbDetails.challan.id },
        'rate': cbDetails.rate,
        'quantity': cbDetails.quantity,
        'returned': cbDetails.returned,
        'saleValue': cbDetails.saleValue
    };
    this.data = <JSON>this.obj;

    console.log(this.data);

    return this.http.put<CbDetails>(this._updateCbDetailsURL + cbDetails.id, this.data, httpOptions);
  }
}
