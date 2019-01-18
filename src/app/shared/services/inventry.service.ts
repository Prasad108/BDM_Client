import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'app/appSettings';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class InventryService {

  constructor(private httpClient: HttpClient) {
   }

   private listOfBooks=AppSettings.API_ENDPOINT+'/bookName/';

   getAllBooks():Observable<Book[]>{
     return this.httpClient.get<Book[]>(this.listOfBooks);
   }
}
