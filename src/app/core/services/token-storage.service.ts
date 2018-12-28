import { Injectable } from '@angular/core';
import {MyBooleans} from 'app/shared/localEnums';
import {  Subject} from 'rxjs';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const LOGGED_IN_STATUS_KEY = 'IsLoggedIN';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];
  public isLoggedIn: boolean = false;
  public loginStatusChanged: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.loginStatusChanged.subscribe((value) => {
      this.isLoggedIn = value;
     });
  }

  signOut() {
    window.sessionStorage.clear();
    this.loginStatusChanged.next(false);
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    window.sessionStorage.setItem(LOGGED_IN_STATUS_KEY, MyBooleans.TRUE);
    this.loginStatusChanged.next(true);

  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];

    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }

    return this.roles;
  }
  public getLoggedInStatus(): boolean {
    if (sessionStorage.getItem(LOGGED_IN_STATUS_KEY) === null) {
        return false;
    } else {
      return true;
    }
  }
}
