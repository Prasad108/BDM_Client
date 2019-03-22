import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppSettings} from 'app/appSettings';
import { Observable } from 'rxjs';
import { TotalBDWithinDateRange } from '../models/TotalBDWithinDateRange';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private reportURL = AppSettings.API_ENDPOINT + '/getTotalBDInDateRange/';

  constructor(private http: HttpClient) { }

  addLanguage(formData): Observable<TotalBDWithinDateRange> {
    return this.http.post<TotalBDWithinDateRange>(this.reportURL, formData, AppSettings.HTTP_OPTIONS );
  }
}
