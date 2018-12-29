import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'app/shared/services/token-storage.service';
import {UserRoles} from 'app/shared/localEnums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;
  isLoggedIn: boolean;
  userRole: string[];

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(private tokenStorage: TokenStorageService,
              private router: Router
          ) {
  }

  ngOnInit() {
     this.tokenStorage.loginStatusChanged.subscribe((loggedInStuatus) => {
       this.isLoggedIn = this.tokenStorage.getLoggedInStatus();
     });
     this.isLoggedIn = this.tokenStorage.getLoggedInStatus();
  }

  isAdmin(): boolean {
    return  this.tokenStorage.getAuthorities().includes(UserRoles.ADMIN);
  }
  isUser(): boolean {
    return this.tokenStorage.getAuthorities().includes(UserRoles.USER);
  }
  logout() {
    this.tokenStorage.signOut();
    this.router.navigate(['/home']);
   // window.location.reload();
  }

}
