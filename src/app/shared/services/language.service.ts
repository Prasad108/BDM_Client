import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppSettings} from 'app/appSettings';
import { Language } from './../models/Language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private getAllLanguagesForBookNameInUsersInventory_URL = AppSettings.API_ENDPOINT
                         + '/languages/getAllLanguagesForBookNameInUsersInventory/';
  getLanguagesOfAllBooksHavingBookName_URL = AppSettings.API_ENDPOINT
  + '/languages/getLanguagesOfAllBooksHavingBookName/';
  constructor(private http: HttpClient) { }

  getAllLanguagesForBookNameInUsersInventory(langId: any): Observable <Language[]> {
      return this.http.get<Language[]>(this.getAllLanguagesForBookNameInUsersInventory_URL + langId);
  }
  getLanguagesOfAllBooksHavingBookName(langId: any): Observable <Language[]> {
    return this.http.get<Language[]>(this.getLanguagesOfAllBooksHavingBookName_URL + langId);
}
}
