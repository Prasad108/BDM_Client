  import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AuthService } from 'app/shared/services/auth.service';
import { TokenStorageService } from 'app/shared/services/token-storage.service';
import { AuthLoginInfo } from 'app/shared/models/login-info';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService,
     private tokenStorage: TokenStorageService,
     private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        if (this.roles.includes('ADMIN')) {
          this.router.navigate(['/admin/home']);
        } else if (this.roles.includes('USER')) {
          this.router.navigate(['/user']);
        } else if (this.roles.includes('SUPERADMIN')) {
          this.router.navigate(['/superAdmin']);
        }
        // this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
