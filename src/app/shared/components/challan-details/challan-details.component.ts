import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ChallanService} from 'app/shared/services/challan.service';
import {Challan} from 'app/shared/models/Challan';

import 'jspdf';
import 'jspdf-autotable';

declare let jsPDF;
@Component({
  selector: 'app-challan-details',
  templateUrl: './challan-details.component.html',
  styleUrls: ['./challan-details.component.css']
})
export class ChallanDetailsComponent implements OnInit {
  private id: string;
  challan: Challan;
  issuedTotal: Number = 0;
  salevalueTotal: Number = 0;
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

  print () {
    let doc = new jsPDF('l');
    // Print the Challan Summary
    doc.autoTable({
      html: '#ChallanSummary',
      startY: 25,
      theme: 'grid',
    // Default for all columns
      styles: {overflow: 'ellipsize', cellWidth: 'wrap'},
    // Override the default above for the text column
      columnStyles: {text: {cellWidth: 'auto'}}
    });

    doc.text('Challan Summary', 14, 20);

    if (this.challan && this.challan.cbDetailses.length > 0) {
      // print the Cb Details
      doc.text('Challan Details', 14, doc.autoTable.previous.finalY + 10);
      //let f: Inr;
      // doc.addFileToVFS('InrFont.ttf', f.inrfont);
      // doc.addFont('InrFont.ttf', 'inr', 'normal');
      // doc.setFont('inr', 'normal');
      doc.autoTable({html: '#cbDetailses',
      startY: doc.autoTable.previous.finalY + 15,
      // Default for all columns
        styles: {overflow: 'ellipsize', cellWidth: 'wrap'},
      // Override the default above for the text column
        columnStyles: {text: {cellWidth: 'auto'}}
      });
  } else {
    doc.text('No books Issued', 14, doc.autoTable.previous.finalY + 10);
  }
    doc.save('table.pdf');
  }

}
