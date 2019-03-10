import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Reports } from 'app/shared/Enum/reports';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  booksBetweenDates = Reports.TOTAL_BOOKS_DISTRIBUTED_BETWEEN_DATE_RANGE;
  reportsForm: FormGroup;
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.reportsForm = this.fb.group({
      reportSelect: 'default',
      dateForms : this.fb.group({}),
    });
   this.reportsForm.get('reportSelect').valueChanges.subscribe(data => {
      if (data === Reports.TOTAL_BOOKS_DISTRIBUTED_BETWEEN_DATE_RANGE) {
        console.log('Yes it is equal');
        console.log(this.reportsForm);
        this.reportsForm.addControl('startDate', new FormControl('', Validators.required) );
        this.reportsForm.addControl('endDate', new FormControl('', Validators.required) );
        console.log(this.reportsForm);
      } else {
        this.reportsForm.removeControl('startDate');
        this.reportsForm.removeControl('endDate');
      }
    });
  }

  validateReport() {
  }


}
