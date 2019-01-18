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
constructor(private http: HttpClient) { }

getAllTypesForBookNameInUsersInventory(nameId: any, langId: any): Observable <Type[]> {
return this.http.get<Type[]>(this.getAllLanguagesForBookNameInUsersInventory_URL + nameId + '/' + langId);
}
}
