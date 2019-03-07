import { Component, OnInit } from '@angular/core';
import { InventryService } from 'app/shared/services/inventry.service';
import { StockJson } from 'app/shared/models/StockJson';
import { ToastaService } from 'ngx-toasta';
import * as shape from 'd3-shape';
import * as d3 from 'd3';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  true = true;
  false = false;
  stock: StockJson[];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Books';
  showYAxisLabel = true;
  yAxisLabel = 'Quantity';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor(private inventryService: InventryService,
    private toastr: ToastaService) { }

  ngOnInit() {
    this.inventryService.getInventryDetailsOfCurrentUser().subscribe(data => this.stock = data,
      error => this.toastr.error('Error Retriving stock'));

  }



}
