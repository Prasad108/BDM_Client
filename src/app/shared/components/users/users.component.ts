import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/shared/services/user.service';
import { User } from './../../../shared/models/User';
import { ToastaService } from 'ngx-toasta';
import { ActivatedRoute} from '@angular/router';
import { TokenStorageService } from 'app/shared/services/token-storage.service';
import {UserRoles} from 'app/shared/localEnums';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  centerId;
  roles: string[] = [];
  constructor(private userService: UserService,
    private toastr: ToastaService,
    private route: ActivatedRoute,
    private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.roles = this.tokenStorage.getAuthorities();

    if (this.isSuperadmin()) {
      this.route.paramMap.subscribe(params => {
        this.centerId = params.get('id');
      });
      this.userService.getUsersOfCenterByCenterId(this.centerId).subscribe(
        data => this.users = data,
        error => this.toastr.error('Error while fetching user list')
      );
    } else if (this.isAdmin()) {
        this.userService.getAllUserOfCurrentUsersCenter().subscribe(
          data => this.users = data,
          error => this.toastr.error('Error while fetching user list')
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
