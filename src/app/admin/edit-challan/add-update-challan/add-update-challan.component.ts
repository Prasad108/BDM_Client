import { Component, OnInit, Input } from '@angular/core';
import {CbDetails} from 'app/shared/models/CbDetails';
@Component({
  selector: 'app-add-update-challan',
  templateUrl: './add-update-challan.component.html',
  styleUrls: ['./add-update-challan.component.css']
})
export class AddUpdateChallanComponent implements OnInit {
  @Input() cbDetails: CbDetails;
  @Input() mode: string;

  localCbDetail: CbDetails;
  constructor() {
    this.localCbDetail = this.cbDetails;
   }

  ngOnInit() {
    this.localCbDetail = this.cbDetails;
  }

  updateReturned(returnedInput) {
    this.localCbDetail.returned = returnedInput;
  }

  updateIssued(value) {
    this.localCbDetail.quantity = value;
  }


}
