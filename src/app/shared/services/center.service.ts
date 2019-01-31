import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppSettings} from 'app/appSettings';
import { Center } from './../../shared/models/Center';


@Injectable({
  providedIn: 'root'
})
export class CenterService {

  private Center_URL = AppSettings.API_ENDPOINT + '/center/';

  constructor(private http: HttpClient) { }

  getAllCenter(): Observable <Center[]> {
    return this.http.get<Center[]>(this.Center_URL);
  }

  createNew(center: Center): Observable <Center> {
    return this.http.put<Center>(this.Center_URL, center, AppSettings.HTTP_OPTIONS);
  }


}
