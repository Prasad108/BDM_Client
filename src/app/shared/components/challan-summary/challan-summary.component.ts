import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import {Challan} from 'app/shared/models/Challan';
import { ChallanSummaryMode } from 'app/shared/Enum/challanSummaryMode';


@Component({
  selector: 'app-challan-summary',
  templateUrl: './challan-summary.component.html',
  styleUrls: ['./challan-summary.component.css']
})
export class ChallanSummaryComponent implements OnInit {
  @Input() challan: Challan;
  @Input() mode: ChallanSummaryMode;
  @Output() getSumOf = new EventEmitter<string>();
  constructor(
      ) { }

  ngOnInit() {
  }

  getSum(filed: string) {
    this.getSumOf.next(filed);
  }

}
