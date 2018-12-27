import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'app/core/services/token-storage.service';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';
import {Subject} from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit { 
  navbarOpen = false;
  loggedIn = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.tokenStorage.sharedData$.subscribe(data =>
      //console.log(data)
      this.loggedIn = data);
  }

}
