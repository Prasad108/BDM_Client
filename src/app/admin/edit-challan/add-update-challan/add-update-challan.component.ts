import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {CbDetails} from 'app/shared/models/CbDetails';
import { ShairedService } from 'app/shared/services/shaired.service';
import { CbDetailsService } from 'app/shared/services/cb-details.service';
import { PreviousRouteService } from 'app/shared/services/previous-route.service';
import { ToastaService } from 'ngx-toasta';

@Component({
  selector: 'app-add-update-challan',
  templateUrl: './add-update-challan.component.html',
  styleUrls: ['./add-update-challan.component.css']
})
export class AddUpdateChallanComponent implements OnInit {
   cbDetails: CbDetails;
   errorMessage = false;
   succuessMessage = false;

  constructor(private shairedService: ShairedService,
              private cbDetailsService: CbDetailsService,
              private router: Router,
              private previousRouteService: PreviousRouteService,
              private toastr: ToastaService  ) {
   }

  ngOnInit() {
    if (typeof this.shairedService.cbDetails === 'undefined' ) {
      this.router.navigate(['/admin/challans']);
    }
    this.cbDetails = this.shairedService.cbDetails;
    this.shairedService.$cbDetails.subscribe(data => {
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
    this.cbDetails.saleValue = (this.cbDetails.rate * (this.cbDetails.quantity - this.cbDetails.returned ));
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

  validateReturned(): boolean {
    if (this.cbDetails.returned <= this.cbDetails.quantity && this.cbDetails.returned >= 0) {
      return true;
    } else {
      return false;
    }
  }


}
