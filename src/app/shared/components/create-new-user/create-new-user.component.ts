import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/models/User';
import { ActivatedRoute, Router} from '@angular/router';
import { ToastaService } from 'ngx-toasta';
import { UserService } from 'app/shared/services/user.service';
import { TokenStorageService } from 'app/shared/services/token-storage.service';
import {UserRoles} from 'app/shared/localEnums';
import { ShairedService } from 'app/shared/services/shaired.service';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.css']
})
export class CreateNewUserComponent implements OnInit {

  user: User = new User();
  centerId;
  isUpdateRequest = false;
  constructor(private userService: UserService,
    private toastr: ToastaService,
    private route: ActivatedRoute,
    private router: Router,
    private tokenStorage: TokenStorageService,
    private shairedService: ShairedService) { }

  ngOnInit() {
    if (this.router.url.includes('update')) {
      this.isUpdateRequest = true;
      if (typeof this.shairedService.user === 'undefined' ) {
        this.router.navigate([this.router.url.slice(0, -7)]);
      } else {
        this.user =  this.shairedService.user;
      }
    }
    if (this.isSuperadmin()) {
          this.route.paramMap.subscribe(params => {
            this.centerId = params.get('id');
          });
          this.user.center = this.centerId;
          // currently for the admin its inndex is is 2
            this.user.roles = 2;
    } else if (this.isAdmin()) {
        this.userService.getCurrentUserDetails().subscribe(
          data =>  this.user.center = data.center,
          error => this.toastr.error('Error While fetching user information')
        );
    }


  }

  createNewUser() {
    if (!this.isUpdateRequest) {
      this.user.password = this.user.mob;
      if (this.isSuperadmin()) {
        this.userService.createUser(this.user).subscribe(
          data => {
            this.toastr.success('New Admin Created Successfully');
            this.router.navigate([this.router.url.slice(0, -9)]);
          },
          error => {
            this.toastr.error(error.error);
        }
        );
    } else if (this.isAdmin()) {
      this.userService.createUser(this.user).subscribe(
        data => {
          if (this.user.roles === 1) {
            this.toastr.success('New User Created Successfully');
          } else {
            this.toastr.success('New Admin Created Successfully');
          }
          this.router.navigate([this.router.url.slice(0, -4)]);
        },
        error => {
          this.toastr.error(error.error);
      }
      );
    }
    } else {
        this.userService.updateUser(this.user).subscribe(
          data => {
            this.toastr.success('User Updated Successfully');
            this.router.navigate([this.router.url.slice(0, -7)]);
          },
          error => {
            this.toastr.error(error.error);
        }
        );
    }

  }

  isAdmin(): boolean {
    return  this.tokenStorage.getAuthorities().includes(UserRoles.ADMIN);
  }
  isUser(): boolean {
    return this.tokenStorage.getAuthorities().includes(UserRoles.USER);
  }

  isSuperadmin(): boolean {
    return this.tokenStorage.getAuthorities().includes(UserRoles.SUPERADMIN);
  }


}
