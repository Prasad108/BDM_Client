import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Reports } from 'app/shared/Enum/reports';
import {ValidateSelect, ValidateDateRange} from 'app/shared/validators/selectValidator';
import { ReportService } from 'app/shared/services/report.service';
import { TotalBDWithinDateRange } from 'app/shared/models/TotalBDWithinDateRange';
import { ReportsForm } from 'app/shared/models/ReportsForm';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  booksBetweenDates = Reports.TOTAL_BOOKS_DISTRIBUTED_BETWEEN_DATE_RANGE;
  reportsForm: FormGroup;
  dateRange: FormControl = new FormControl({begin: new Date(), end: new Date()}, [Validators.required]);
  reportResult: TotalBDWithinDateRange[];
  userForm: ReportsForm;
  constructor( private fb: FormBuilder,
    private reportService: ReportService) { }

  ngOnInit() {
    this.reportsForm = this.fb.group({
        reportSelect: ['default', [Validators.required, ValidateSelect]],
    });
   this.reportsForm.get('reportSelect').valueChanges.subscribe(data => {
      if (data === Reports.TOTAL_BOOKS_DISTRIBUTED_BETWEEN_DATE_RANGE) {
        this.reportsForm.addControl('date', this.dateRange);
        console.log(this.reportsForm);
      } else {
        this.reportsForm.removeControl('date');
      }
    });
  }

  validateReport() {

    // this.fouserForm.reportName = this.reportsForm.controls.get('reportSelect').value;
    // this.reportService.addLanguage().subscribe(data => this.reportResult = data);
  }


  getReport()   {

  }


}
