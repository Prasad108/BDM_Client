import { Component, OnInit } from '@angular/core';
import {ChallanService} from 'app/shared/services/challan.service';
import {Challan} from 'app/shared/models/Challan';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from 'app/shared/models/User';
import { UserService } from 'app/shared/services/user.service';


@Component({
  selector: 'app-challan-list',
  templateUrl: './challan-list.component.html',
  styleUrls: ['./challan-list.component.css']
})
export class ChallanListComponent implements OnInit {

  challanList: Challan[];

  searchForm: FormGroup;

  userList: User[];

  constructor(private challanService: ChallanService,
              private fb: FormBuilder,
              private userService: UserService) { }

  ngOnInit() {

    this.userService.getAllUserOfCurrentUsersCenter().subscribe(data => this.userList = data );

    this.challanService.getChallanListOfUsersCenter().subscribe(data => {
      this.challanList = data;
    });

    this.searchForm = this.fb.group ({
          challanID : '',
          issuedByMe : false,
          issuedBy: 'default',
          issuedTo: 'default',
          challanStatus: 'All'
    });

    this.searchForm.get('challanID').valueChanges.subscribe(data => {
      if (data !== '' || data !==  null) {
        this.searchForm.removeControl('issuedByMe');
        this.searchForm.removeControl('issuedBy');
        this.searchForm.removeControl('issuedTo');
        this.searchForm.removeControl('challanStatus');
      }
      if (data === null) {
        this.searchForm.addControl('issuedByMe', new FormControl(false, Validators.required) );
        this.searchForm.addControl('issuedBy', new FormControl('default', Validators.required) );
        this.searchForm.addControl('issuedTo', new FormControl('default', Validators.required) );
        this.searchForm.addControl('challanStatus', new FormControl('All', Validators.required) );

      }
    });

    this.searchForm.get('issuedByMe').valueChanges.subscribe(data => {
      console.log(data);
      if (data) {
        this.searchForm.removeControl('issuedBy');
      } else {
        this.searchForm.addControl('issuedBy', new FormControl('default', Validators.required) );
      }
    });

  }

}
