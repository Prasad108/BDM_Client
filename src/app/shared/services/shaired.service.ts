import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CbDetails } from '../models/CbDetails';
@Injectable({
  providedIn: 'root'
})
export class ShairedService {
  cbDetails: CbDetails;
  public $cbDetails: Subject<CbDetails> = new Subject<CbDetails>();
  constructor() {
    this.$cbDetails
      .subscribe(data => this.cbDetails = data);
  }

  updateCbDetails(data: CbDetails) {
    this.cbDetails = data;
    this.$cbDetails.next(data);
    console.log('cbDetails changed in the shared servie ' + this.cbDetails);
    console.log(this.cbDetails);
  }

}
