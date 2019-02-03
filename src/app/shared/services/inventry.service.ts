import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'app/appSettings';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';
import { Type } from '../models/Type';

@Injectable({
  providedIn: 'root'
})
export class InventryService {

  constructor(private httpClient: HttpClient) {
   }

   private listOfBooks = AppSettings.API_ENDPOINT + '/bookName/';
   private Type = AppSettings.API_ENDPOINT + '/bookName/getbook/';

   getAllBooks(): Observable<Book[]> {
     return this.httpClient.get<Book[]>(this.listOfBooks);
   }

   getType(id: number): Observable<Type[]> {
     return this.httpClient.get<Type[]>(this.Type + id);
   }
}
