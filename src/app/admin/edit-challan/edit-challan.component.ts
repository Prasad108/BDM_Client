import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ChallanService} from 'app/shared/services/challan.service';
import {Challan} from 'app/shared/models/Challan';
import { ShairedService } from './../../shared/services/shaired.service';
import { CbDetails } from './../../shared/models/CbDetails';

@Component({
  selector: 'app-edit-challan',
  templateUrl: './edit-challan.component.html',
  styleUrls: ['./edit-challan.component.css']
})
export class EditChallanComponent implements OnInit {
  private id: string;
  challan: Challan;
  issuedTotal: Number = 0;
  salevalueTotal: Number = 0;
  modalCbDetails: CbDetails;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private challanService: ChallanService,
    private shairedService: ShairedService
      ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.challanService.getDetailedChallan(this.id).subscribe(data => this.challan = data);
    });

  }

  getSum(column): number {
    let sum = 0;
    for (let i = 0; i < this.challan.cbDetailses.length; i++) {
      sum += this.challan.cbDetailses[i][column];
    }
    return sum;
  }

  loadModalCbDetails(loadmodalCbDetails: CbDetails) {
    // this.modalCbDetails = loadmodalCbDetails;
    let temp: any;
    temp = loadmodalCbDetails ;
      this.shairedService.updateCbDetails(temp);
      console.log('' + this.router.url);
      this.router.navigate([this.router.url + '/update']);
  }
}
