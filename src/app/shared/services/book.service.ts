import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AppSettings} from 'app/appSettings';
import { Book } from './../models/Book';
import { BookName } from './../models/BookName';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private getAllBookNameOfUsersInventory_URL = AppSettings.API_ENDPOINT + '/bookName/getAllBookNameOfUsersInventory';
  private getBooNameOfAllBooks_URL = AppSettings.API_ENDPOINT + '/bookName/getBooNameOfAllBooks';

  constructor(private http: HttpClient) { }

  getAllBookNameOfUsersInventory(): Observable <BookName[]> {
    return this.http.get<BookName[]>(this.getAllBookNameOfUsersInventory_URL);
  }

  getBooNameOfAllBooks(): Observable <BookName[]> {
    return this.http.get<BookName[]>(this.getBooNameOfAllBooks_URL);
  }
}
