import { Injectable } from '@angular/core';
import { AppSettings } from 'app/appSettings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from '../models/Language';

@Injectable({
  providedIn: 'root'
})
export class BookLanguageService {
  private addLanguage_URL = AppSettings.API_ENDPOINT + '/languages/';
  private getAllLanguage_URL = AppSettings.API_ENDPOINT + '/languages/';
  constructor(private http: HttpClient) { }

  addLanguage(lang): Observable<Language> {
    return this.http.put<Language>(this.addLanguage_URL, lang, AppSettings.HTTP_OPTIONS);
  }

  getAllLanguage(): Observable<Language[]> {
    return this.http.get<Language[]>(this.getAllLanguage_URL);
  }


}
