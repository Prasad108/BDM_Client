import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'app/appSettings';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';
import { Type } from '../models/Type';
import { StockJson } from '../models/StockJson';

@Injectable({
  providedIn: 'root'
})
export class InventryService {

  constructor(private httpClient: HttpClient) {
   }

   private listOfBooks = AppSettings.API_ENDPOINT + '/bookName/';
   private Type = AppSettings.API_ENDPOINT + '/bookName/getbook/';
   private getInventryDetailsOfCurrentUser_URL = AppSettings.API_ENDPOINT + '/inventry/getInventryDetailsOfCurrentUser/';

   getAllBooks(): Observable<Book[]> {
     return this.httpClient.get<Book[]>(this.listOfBooks);
   }

   getType(id: number): Observable<Type[]> {
     return this.httpClient.get<Type[]>(this.Type + id);
   }

   getInventryDetailsOfCurrentUser(): Observable<StockJson[]> {
    return this.httpClient.get<StockJson[]>(this.getInventryDetailsOfCurrentUser_URL);
  }
}
