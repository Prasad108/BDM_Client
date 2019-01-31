import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppSettings} from 'app/appSettings';
import { Center } from './../../shared/models/Center';


@Injectable({
  providedIn: 'root'
})
export class CenterService {

  private getAllCenter_URL = AppSettings.API_ENDPOINT + '/center/';

  constructor(private http: HttpClient) { }

  getAllCenter(): Observable <Center[]> {
    return this.http.get<Center[]>(this.getAllCenter_URL);
  }


}
