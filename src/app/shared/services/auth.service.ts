import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


import { JwtResponse } from 'app/shared/models/jwt-response';
import { AuthLoginInfo } from 'app/shared/models/login-info';
import { SignUpInfo } from 'app/shared/models/sigup-info';
import {AppSettings} from 'app/appSettings';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  private loginUrl = AppSettings.API_ENDPOINT + '/api/auth/signin';
  private signupUrl = AppSettings.API_ENDPOINT  + '/api/auth/signup';

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
