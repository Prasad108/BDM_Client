import { Component, OnInit } from '@angular/core';
import { ChallanService } from 'app/shared/services/challan.service';
import { Challan } from 'app/shared/models/Challan';

@Component({
  selector: 'app-user-chalan-list',
  templateUrl: './user-chalan-list.component.html',
  styleUrls: ['./user-chalan-list.component.css']
})
export class UserChalanListComponent implements OnInit {

  challanList:Challan[];
  constructor(private challanService:ChallanService) { }

  ngOnInit() {
    this.challanService.getListOfUserSpecificChallan().subscribe(data=>{
      this.challanList=data;
    })
  }

}
