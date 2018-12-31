import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {ChallanService} from 'app/shared/services/challan.service';
import {Challan} from 'app/shared/models/Challan';

@Component({
  selector: 'app-challan-details',
  templateUrl: './challan-details.component.html',
  styleUrls: ['./challan-details.component.css']
})
export class ChallanDetailsComponent implements OnInit {
  private id: string;
  challan: Challan;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private challanService: ChallanService
                ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.challanService.getDetailedChallan(this.id).subscribe(data => this.challan = data);
    });

  }

}
