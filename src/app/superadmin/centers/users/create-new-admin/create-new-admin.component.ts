import { Component, OnInit } from '@angular/core';
import { User } from 'app/shared/models/User';
import { ActivatedRoute, Router} from '@angular/router';
import { ToastaService } from 'ngx-toasta';
import { UserService } from 'app/shared/services/user.service';
import { Center } from 'app/shared/models/Center';
import { Role } from 'app/shared/models/Role';

@Component({
  selector: 'app-create-new-admin',
  templateUrl: './create-new-admin.component.html',
  styleUrls: ['./create-new-admin.component.css']
})
export class CreateNewAdminComponent implements OnInit {

  user: User = new User();
  centerId;
  constructor(private userService: UserService,
    private toastr: ToastaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.centerId = params.get('id');
    });
    this.user.center = this.centerId;
    // currently for the admin its inndex is is 2
    this.user.roles = 2;
  }

  createNewAdmin() {
    console.log(this.user);
    this.userService.createAdmin(this.user).subscribe(
      data => {
        this.toastr.success('Admin Created Successfully');
       // this.router.navigate([this.router.url.slice(0, -9)]);
      },
      error => this.toastr.error(error)
    );
  }

}
