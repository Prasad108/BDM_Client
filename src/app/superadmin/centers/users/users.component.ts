import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/shared/services/user.service';
import { User } from './../../../shared/models/User';
import { ToastaService } from 'ngx-toasta';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  centerId;
  constructor(private userService: UserService,
    private toastr: ToastaService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.centerId = params.get('id');
    });
    this.userService.getUsersOfCenterByCenterId(this.centerId).subscribe(
      data => this.users = data,
      error => this.toastr.error('Error while fetching user list')
    );
  }

}
