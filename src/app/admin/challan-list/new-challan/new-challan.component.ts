import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../shared/services/user.service';
import { User } from './../../../shared/models/User';
import { ChallanService } from 'app/shared/services/challan.service';
import { Challan } from 'app/shared/models/Challan';
import { Router } from '@angular/router';
import { ToastaService } from 'ngx-toasta';

@Component({
  selector: 'app-new-challan',
  templateUrl: './new-challan.component.html',
  styleUrls: ['./new-challan.component.css']
})
export class NewChallanComponent implements OnInit {
userlist: User[];
userSelectError = false;
challan: Challan;
  constructor(private userService: UserService,
              private challanService: ChallanService,
              private router: Router,
              private toastr: ToastaService
    ) { }

  IssuedToUserID: any = 'default';
  ngOnInit() {
    this.userService.getAllUserOfCurrentUsersCenter().subscribe(data => this.userlist = data);
  }

  ValidateUser() {
    if (this.IssuedToUserID === 'default') {
      this.userSelectError = true;
    } else {
      this.userSelectError = false;
    }
  }

  CreatNewChallan() {
    this.ValidateUser();
    if (!this.userSelectError) {
      this.challanService.creatNewChallan(this.IssuedToUserID).subscribe(data => {
        this.challan = data ;
        this.toastr.success('Challan created successfully!');
        this.router.navigate(['/admin/challans/edit/' + this.challan.id]);
      },
      error => {
       this.toastr.error('Error in creating Challan!');
      });
    }
  }

}
