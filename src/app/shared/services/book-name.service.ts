import { Injectable } from '@angular/core';
import { AppSettings } from 'app/appSettings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookName } from '../models/BookName';

@Injectable({
  providedIn: 'root'
})
export class BookNameService {

  private getAllBookName_URL = AppSettings.API_ENDPOINT + '/bookName/';
  private addBookName_URL = AppSettings.API_ENDPOINT + '/bookName/';

  constructor(private http: HttpClient) { }

  getAllBookName(): Observable<BookName[]> {
    return this.http.get<BookName[]>(this.getAllBookName_URL);
  }

  addBookName(bookName): Observable<BookName> {
    return this.http.put<BookName>(this.addBookName_URL, bookName, AppSettings.HTTP_OPTIONS);
  }
}
