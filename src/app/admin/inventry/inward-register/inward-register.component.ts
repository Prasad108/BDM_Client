import { Component, OnInit } from '@angular/core';
import {ChallanService} from 'app/shared/services/challan.service';
import {Challan} from 'app/shared/models/Challan';
import { Router } from '@angular/router';
import { ToastaService } from 'ngx-toasta';
@Component({
  selector: 'app-inward-register',
  templateUrl: './inward-register.component.html',
  styleUrls: ['./inward-register.component.css']
})
export class InwardRegisterComponent implements OnInit {

  challanList: Challan[];
  constructor(private challanService: ChallanService,
    private router: Router,
    private toastr: ToastaService) { }

  ngOnInit() {
    this.challanService.getInwardChallanListOfUsersCenter().subscribe(data => {
      this.challanList = data;
    });
  }


  createNewChallan() {
    this.challanService.creatNewInwardChallan().subscribe(data => {
      this.toastr.success('Inward Challan created successfully!');
     this.router.navigate([this.router.url + '/edit/' + data.id]);
    },
    error => this.toastr.error('Error in Creating Inward Challan!'));
  }

}
