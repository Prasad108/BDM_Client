import { Component, OnInit } from '@angular/core';
import {ChallanService} from 'app/shared/services/challan.service';
import {Challan} from 'app/shared/models/Challan';

@Component({
  selector: 'app-challans',
  templateUrl: './challans.component.html',
  styleUrls: ['./challans.component.css']
})
export class ChallansComponent implements OnInit {
  challan: Challan[];


  constructor(private challanService: ChallanService) { }

  ngOnInit() {

    this.challanService.getChallanListOfUsersCenter().subscribe(data => {
      this.challan = data;
    });
  }

}
