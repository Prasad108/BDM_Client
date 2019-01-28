import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewBook } from '../models/NewBookModel';
import { Observable } from 'rxjs';
import { AppSettings } from 'app/appSettings';

@Injectable({
  providedIn: 'root'
})
export class RequestNewBookService {

  private challanListOfUserCenterURL = AppSettings.API_ENDPOINT + '/newBookRequest/';

  constructor(private http: HttpClient) { }

  postNewBookRequestForm(newBook: NewBook): Observable<NewBook>{
    console.log("posting form",newBook);
    return this.http.put<NewBook>(this.challanListOfUserCenterURL,newBook,AppSettings.HTTP_OPTIONS);
  }

}
