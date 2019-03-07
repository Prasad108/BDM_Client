import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ChallanService} from 'app/shared/services/challan.service';
import {Challan} from 'app/shared/models/Challan';
import { CbDetails } from 'app/shared/models/CbDetails';
import { ShairedService } from 'app/shared/services/shaired.service';
import { ToastaService } from 'ngx-toasta';
import 'jspdf';
import 'jspdf-autotable';
declare let jsPDF;
@Component({
  selector: 'app-edit-inward-challan',
  templateUrl: './edit-inward-challan.component.html',
  styleUrls: ['./edit-inward-challan.component.css']
})
export class EditInwardChallanComponent implements OnInit {
  private id: string;
  challan: Challan;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private challanService: ChallanService,
    private shairedService: ShairedService,
    private toastr: ToastaService) { }

  ngOnInit() {
     this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.challanService.getDetailedChallan(this.id).subscribe(data => this.challan = data);
    });
  }

  getSum(column): number {
    let sum = 0;
    if (this.challan) {
      for (let i = 0; i < this.challan.cbDetailses.length; i++) {
        sum += this.challan.cbDetailses[i][column];
      }
    }
    return sum;
  }

  loadModalCbDetails(loadmodalCbDetails: CbDetails) {
    let temp: any;
    temp = loadmodalCbDetails ;
      this.shairedService.updateInwardCbDetails(temp);
      this.router.navigate([this.router.url + '/update']);
  }

  addToInventory() {
    this.challanService.addToInventory(this.challan.id).subscribe( data => {
     if (data.addedToInventory) {
      this.challan.addedToInventory = true;
      this.toastr.success('Inventory Updated Successfully!');
     } else {
      this.toastr.error('Failed to update Inventory!');
     }
    },
    error => this.toastr.error('Failed to update Inventory!')
    );
  }


  print () {
    // tslint:disable-next-line:prefer-const
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
      // let f: Inr;
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
