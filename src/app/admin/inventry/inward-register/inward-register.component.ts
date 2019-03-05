import { Component, OnInit } from '@angular/core';
import {ChallanService} from 'app/shared/services/challan.service';
import {Challan} from 'app/shared/models/Challan';
@Component({
  selector: 'app-inward-register',
  templateUrl: './inward-register.component.html',
  styleUrls: ['./inward-register.component.css']
})
export class InwardRegisterComponent implements OnInit {

  challanList: Challan[];
  constructor(private challanService: ChallanService) { }

  ngOnInit() {
    this.challanService.getInwardChallanListOfUsersCenter().subscribe(data => {
      this.challanList = data;
    });
  }


  createNewChallan() {
    this.challanService.creatNewInwardChallan().subscribe(data => {
     console.log('new Challan is created' + data );
    });
  }

}
