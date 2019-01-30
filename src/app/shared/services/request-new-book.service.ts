import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewBook } from '../models/NewBookModel';
import { Observable } from 'rxjs';
import { AppSettings } from 'app/appSettings';

@Injectable({
  providedIn: 'root'
})
export class RequestNewBookService {

  private newBookServiceRequestFormURL = AppSettings.API_ENDPOINT + '/newBookRequest/';
  private newBookServiceRequestsURL = AppSettings.API_ENDPOINT + '/newBookRequest/';
  private newBookRequestByIdURL=AppSettings.API_ENDPOINT + '/newBookRequest/validate/';

  constructor(private http: HttpClient) { }

  postNewBookRequestForm(newBook: NewBook): Observable<NewBook>{
    console.log("posting form",newBook);
    return this.http.put<NewBook>(this.newBookServiceRequestFormURL,newBook,AppSettings.HTTP_OPTIONS);
  }

  getNewBookServiceRequests():Observable<NewBook[]>
  {
    return this.http.get<NewBook[]>(this.newBookServiceRequestsURL);
  }

  getRequestById(id):Observable<NewBook>{
    return this.http.get<NewBook>(this.newBookRequestByIdURL+id);
  }

}
