import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CbDetails} from 'app/shared/models/CbDetails';
import { ShairedService } from 'app/shared/services/shaired.service';
import { CbDetailsService } from 'app/shared/services/cb-details.service';
import { ToastaService } from 'ngx-toasta';

@Component({
  selector: 'app-update-inward-challan-cb-details',
  templateUrl: './update-inward-challan-cb-details.component.html',
  styleUrls: ['./update-inward-challan-cb-details.component.css']
})
export class UpdateInwardChallanCbDetailsComponent implements OnInit {
  cbDetails: CbDetails;
  errorMessage = false;
  succuessMessage = false;

 constructor(private shairedService: ShairedService,
             private cbDetailsService: CbDetailsService,
             private router: Router,
             private toastr: ToastaService  ) {
  }

 ngOnInit() {
   if (typeof this.shairedService.inwardCbDetails === 'undefined' ) {
     this.router.navigate(['/admin/inventry/inwardRegister']);
   }
   this.cbDetails = this.shairedService.cbDetails;
   this.shairedService.$inwardCbDetails.subscribe(data => {
     this.cbDetails = data ;
   });
 }


 updateCbDetail() {
   // this.succuessMessage = false;
   // this.errorMessage = false;
   this.cbDetailsService.updateCbdetails(this.cbDetails).subscribe(data => {
     // this.succuessMessage = true;
     this.toastr.success('Challan updated successfully!');
     this.goBack();
   },
   error => {
    // this.errorMessage = true;
    this.toastr.error('Error in updating Challan!');
   }
   );
 }

 updateSaleValue() {
   this.cbDetails.saleValue = (this.cbDetails.rate * (this.cbDetails.quantity));
 }

 goBack() {
   this.router.navigate([this.router.url.slice(0, -7)]);
 }

 validateRate(): boolean {
   if (this.cbDetails.rate > 0) {
     return true;
   } else {
     return false;
   }
 }

 validatebookQuantity(): boolean {
   if ( this.cbDetails.quantity > 0) {
     return true;
   } else {
     return false;
   }
 }


}
