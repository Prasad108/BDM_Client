import { Component, OnInit } from '@angular/core';
import {ChallanService} from 'app/shared/services/challan.service';
import {Challan} from 'app/shared/models/Challan';
import { ChallansComponent } from 'app/shared/components/challans/challans.component';

@Component({
  selector: 'app-challan-list',
  templateUrl: './challan-list.component.html',
  styleUrls: ['./challan-list.component.css']
})
export class ChallanListComponent implements OnInit {

  challanList: Challan[];


  constructor(private challanService: ChallanService) { }

  ngOnInit() {

    this.challanService.getChallanListOfUsersCenter().subscribe(data => {
      this.challanList = data;
    });
  }

}
