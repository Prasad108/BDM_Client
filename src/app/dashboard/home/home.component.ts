import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'app/shared/services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    this.token.loginStatusChanged.subscribe((data) => {
      this.info = {
        token: this.token.getToken(),
        username: this.token.getUsername(),
        authorities: this.token.getAuthorities(),
        loggedIn: this.token.getLoggedInStatus(),
      };
    });

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      loggedIn: this.token.getLoggedInStatus(),
    };
  }

  logout() {
    this.token.signOut();
  }
}
