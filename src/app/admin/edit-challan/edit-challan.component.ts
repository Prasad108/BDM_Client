import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ChallanService} from 'app/shared/services/challan.service';
import {Challan} from 'app/shared/models/Challan';
import {Book} from 'app/shared/models/Book';

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
  modalBook: Book;
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

  getSum(column): number {
    let sum = 0;
    for (let i = 0; i < this.challan.cbDetailses.length; i++) {
      sum += this.challan.cbDetailses[i][column];
    }
    return sum;
  }

  loadModalCbDetails(modalBook: Book) {
      this.modalBook = modalBook;
  }

}
