import { Component, OnInit } from '@angular/core';
import { ChallanService } from 'app/shared/services/challan.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Challan } from './../../../shared/models/Challan';
import { ToastaService } from 'ngx-toasta';

@Component({
  selector: 'app-settle-challan',
  templateUrl: './settle-challan.component.html',
  styleUrls: ['./settle-challan.component.css']
})
export class SettleChallanComponent implements OnInit {

  challanId;
  challan: Challan;
  expenditureAmountError = false;
  recievedAmountError = false;
  constructor(private challanService: ChallanService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastaService) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.challanId = params.get('id');
    });
    this.challanService.getChallanById(this.challanId).subscribe(
      data => this.challan = data
    );
  }
  validateRecievedAmount() {
    if (this.challan.receivedAmount === undefined || this.challan.receivedAmount <= 0) {
       this.recievedAmountError = true;
    } else {
      this.recievedAmountError = false;
    }
  }

  validateExpenditureAmount() {
    if (this.challan.expAmount != null && this.challan.expAmount <= 0) {
      this.expenditureAmountError = true;
   } else {
     this.expenditureAmountError = false;
   }
  }

  settleChallan() {
    this.challan.settled = 1;
    this.challan.settledDate = new Date();
    this.challan.cbDetailses = null;
    this.challanService.saveChallan(this.challan).subscribe(
      data => {
          this.toastr.success('Challan Settled Successfully');
          const regex = /edit*/gi;
          this.router.navigate([this.router.url.replace(regex, 'details').slice(0, -7) ]);
        },
      error => this.toastr.error('Error while Settling Challan')
    );

  }

}
