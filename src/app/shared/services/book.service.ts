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
  private getBookNameOfAllBooks_URL = AppSettings.API_ENDPOINT + '/bookName/getBooNameOfAllBooks';
  private getAllBookInDetail_URL = AppSettings.API_ENDPOINT + '/book/getAllBookInDetail';



  constructor(private http: HttpClient) { }

  getAllBookNameOfUsersInventory(): Observable <BookName[]> {
    return this.http.get<BookName[]>(this.getAllBookNameOfUsersInventory_URL);
  }

  getBooNameOfAllBooks(): Observable <BookName[]> {
    return this.http.get<BookName[]>(this.getBookNameOfAllBooks_URL);
  }

  getAllBooksInDetail(): Observable <Book[]> {
    return this.http.get<Book[]>(this.getAllBookInDetail_URL);
  }
}
