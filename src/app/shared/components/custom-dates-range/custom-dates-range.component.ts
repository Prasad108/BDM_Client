import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ToastaService } from 'ngx-toasta';
@Component({
  selector: 'app-custom-dates-range',
  templateUrl: './custom-dates-range.component.html',
  styleUrls: ['./custom-dates-range.component.css']
})
export class CustomDatesRangeComponent implements OnInit {
  datesForm: FormGroup;
  FormDateTitle : string;
  ToDateTitle : string;
  fromDateOldVal : Date;
  toDateOldVal : Date;
  constructor(private fb: FormBuilder,  private toaster: ToastaService) {
    this.FormDateTitle = 'From Date';
    this.ToDateTitle = 'To Date';
    this.fromDateOldVal = new Date();
    this.toDateOldVal = new Date();
   }

  ngOnInit() {
    this.datesForm = this.fb.group({
      fromSelect : [this.fromDateOldVal],
      toSelect : [this.toDateOldVal],
    });
  }
  onDateChange(type: string, event: MatDatepickerInputEvent<Date>){
    if(this.datesForm.controls.fromSelect.value > this.datesForm.controls.toSelect.value){
      if(type == 'fromDateSelect'){
        event.value = this.fromDateOldVal;
        this.datesForm.controls.fromSelect.setValue(this.fromDateOldVal);
      } else if(type == 'toDateSelect'){
        event.value = this.toDateOldVal;
        this.datesForm.controls.toSelect.setValue(this.toDateOldVal);
        // this.datesForm.patchValue({

        // });
      }
      this.toaster.error('Please Check Dates');
      return;
    } else {
      if(type == 'fromDateSelect'){
        this.fromDateOldVal = event.value;
        this.datesForm.controls.fromSelect.setValue(this.fromDateOldVal);
      } else if(type == 'toDateSelect'){
        this.toDateOldVal = event.value;
        this.datesForm.controls.toSelect.setValue(this.toDateOldVal);
      }
    }
  }
}
