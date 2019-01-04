import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import {CbDetails} from 'app/shared/models/CbDetails';
import { ShairedService } from 'app/shared/services/shaired.service';
import { CbDetailsService } from 'app/shared/services/cb-details.service';

@Component({
  selector: 'app-add-update-challan',
  templateUrl: './add-update-challan.component.html',
  styleUrls: ['./add-update-challan.component.css']
})
export class AddUpdateChallanComponent implements OnInit, OnChanges {
  // @Input() modalcbDetails: CbDetails;
  // @Input() mode: string;
    tempcbDetails: CbDetails;
   cbDetails: CbDetails;
  constructor(private shairedService: ShairedService,
              private cbDetailsService: CbDetailsService  ) {
   }

  ngOnInit() {
    // console.log(this.modalcbDetails);
    // this.cbDetails = this.modalcbDetails;
    console.log('from update1');
    this.cbDetails = this.shairedService.cbDetails;
    console.log(this.cbDetails);
    this.shairedService.$cbDetails.subscribe(data => {
      this.tempcbDetails = data;
      let temp: any;
      temp = data;
      this.cbDetails = temp ;
      console.log('from update2');
      console.log(this.cbDetails);

    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // const modalcbDetails: SimpleChange = changes.modalcbDetails;
    // console.log('prev value: ', modalcbDetails.previousValue);
    // console.log('got name: ', modalcbDetails.currentValue);
    // this.cbDetails = modalcbDetails.currentValue;
  }

  updateCbDetail() {
    this.cbDetailsService.updateCbdetails(this.cbDetails).subscribe(data => console.log(data));
  }

}
