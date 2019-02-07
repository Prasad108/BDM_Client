import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppSettings} from 'app/appSettings';
import { Book } from './../models/Book';
import { BookName } from './../models/BookName';
import { Language } from '../models/Language';
import { Type } from '../models/Type';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private getAllBookNameOfUsersInventory_URL = AppSettings.API_ENDPOINT + '/bookName/getAllBookNameOfUsersInventory';
  private getBooNameOfAllBooks_URL = AppSettings.API_ENDPOINT + '/bookName/getBooNameOfAllBooks';

  private addLanguage_URL = AppSettings.API_ENDPOINT + '/languages/';
  private addType_URL = AppSettings.API_ENDPOINT + '/type/';

  constructor(private http: HttpClient) { }

  getAllBookNameOfUsersInventory(): Observable <BookName[]> {
    return this.http.get<BookName[]>(this.getAllBookNameOfUsersInventory_URL);
  }

  getBooNameOfAllBooks(): Observable <BookName[]> {
    return this.http.get<BookName[]>(this.getBooNameOfAllBooks_URL);
  }

  addLanguage(lang): Observable<Language> {
    return this.http.put<Language>(this.addLanguage_URL, lang, AppSettings.HTTP_OPTIONS);
  }

  addType(type): Observable<Type> {
    return this.http.put<Type>(this.addType_URL, type, AppSettings.HTTP_OPTIONS);
  }
}
