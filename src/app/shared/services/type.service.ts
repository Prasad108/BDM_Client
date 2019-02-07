import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppSettings} from 'app/appSettings';
import { Injectable } from '@angular/core';
import { Language } from './../models/Language';
import { Type } from './../models/Type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private getAllLanguagesForBookNameInUsersInventory_URL = AppSettings.API_ENDPOINT
  + '/type/getAllTypesForBookNameAndLanguageInUsersInventory/';
  getAllTypesForBookNameAndLanguageFromAllBooks_URL = AppSettings.API_ENDPOINT
  + '/type/getAllTypesForBookNameAndLanguageFromAllBooks/';
  private addType_URL = AppSettings.API_ENDPOINT + '/type/';
  private getAllType_URL = AppSettings.API_ENDPOINT + '/type/';
constructor(private http: HttpClient) { }

getAllTypesForBookNameInUsersInventory(nameId: any, langId: any): Observable <Type[]> {
return this.http.get<Type[]>(this.getAllLanguagesForBookNameInUsersInventory_URL + nameId + '/' + langId);
}
getAllTypesForBookNameAndLanguageFromAllBooks(nameId: any, langId: any): Observable <Type[]> {
  return this.http.get<Type[]>(this.getAllTypesForBookNameAndLanguageFromAllBooks_URL + nameId + '/' + langId);
  }
  addType(type): Observable<Type> {
    return this.http.put<Type>(this.addType_URL, type, AppSettings.HTTP_OPTIONS);
  }

  getAllType(): Observable<Type[]> {
    return this.http.get<Type[]>(this.getAllType_URL);
  }
}
