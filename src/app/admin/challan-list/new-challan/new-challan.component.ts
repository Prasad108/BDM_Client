import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../shared/services/user.service';
import { User } from './../../../shared/models/User';

@Component({
  selector: 'app-new-challan',
  templateUrl: './new-challan.component.html',
  styleUrls: ['./new-challan.component.css']
})
export class NewChallanComponent implements OnInit {
userlist: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUserOfCurrentUsersCenter().subscribe(data => this.userlist = data);
  }

}
