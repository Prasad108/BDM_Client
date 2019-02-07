import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Type } from '../models/Type';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'app/appSettings';

@Injectable({
  providedIn: 'root'
})
export class BookTypeService {
  private addType_URL = AppSettings.API_ENDPOINT + '/type/';
  private getAllType_URL = AppSettings.API_ENDPOINT + '/type/';

  constructor(private http: HttpClient) { }

  addType(type): Observable<Type> {
    return this.http.put<Type>(this.addType_URL, type, AppSettings.HTTP_OPTIONS);
  }

  getAllType(): Observable<Type[]> {
    return this.http.get<Type[]>(this.getAllType_URL);
  }
}
