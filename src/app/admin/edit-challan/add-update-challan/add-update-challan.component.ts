import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import { Router } from '@angular/router';
import {CbDetails} from 'app/shared/models/CbDetails';
import { ShairedService } from 'app/shared/services/shaired.service';
import { CbDetailsService } from 'app/shared/services/cb-details.service';
import { PreviousRouteService } from 'app/shared/services/previous-route.service';

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
              private previousRouteService: PreviousRouteService  ) {
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
    this.succuessMessage = false;
    this.errorMessage = false;
    this.cbDetailsService.updateCbdetails(this.cbDetails).subscribe(data => {
      this.succuessMessage = true;
    },
    error => {
      this.errorMessage = true;
    }
    );
  }

  updateSaleValue() {
    this.cbDetails.saleValue = (this.cbDetails.rate * (this.cbDetails.quantity - this.cbDetails.returned ));
  }

  goBack() {
    this.router.navigate([this.previousRouteService.getPreviousUrl()]);
  }

}
