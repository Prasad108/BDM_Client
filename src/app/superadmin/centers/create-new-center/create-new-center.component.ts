import { Component, OnInit } from '@angular/core';
import { Center } from 'app/shared/models/Center';
import { CenterService } from './../../../shared/services/center.service';
import { ToastaService } from 'ngx-toasta';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-create-new-center',
  templateUrl: './create-new-center.component.html',
  styleUrls: ['./create-new-center.component.css']
})
export class CreateNewCenterComponent implements OnInit {

  center: Center = new Center();
  centerNameError = false;
  centerLocationError = false;
  constructor(
    private toastr: ToastaService,
    private centerService: CenterService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  validateName() {
    if (this.center.name === undefined || this.center.name === '') {
      this.centerNameError = true;
    } else {
      this.centerNameError = false;
    }
  }

  validateLocation() {
    if (this.center.location === undefined || this.center.location === '') {
      this.centerLocationError = true;
    } else {
      this.centerLocationError = false;
    }
  }

  addNewCenter() {
    this.centerService.createNew(this.center).subscribe(
      data => {
        this.toastr.success('New Center Saved Successfully');
        this.router.navigate([this.router.url.slice(0, -4)]);
      },
      error =>  this.toastr.error('Error while Saving Center')
    );

  }



}
