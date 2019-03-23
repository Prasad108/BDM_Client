import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Reports } from 'app/shared/Enum/reports';
import {ValidateSelect, ValidateDateRange} from 'app/shared/validators/selectValidator';
import { ReportService } from 'app/shared/services/report.service';
import { TotalBDWithinDateRange } from 'app/shared/models/TotalBDWithinDateRange';
import { ReportsForm } from 'app/shared/models/ReportsForm';
import { IDataOptions, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { DataManager, WebApiAdaptor  } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  booksBetweenDates = Reports.TOTAL_BOOKS_DISTRIBUTED_BETWEEN_DATE_RANGE;
  reportsForm: FormGroup;
  dateRange: FormControl = new FormControl({begin: new Date(), end: new Date()}, [Validators.required]);
  reportResult: TotalBDWithinDateRange[] = [];
  showResult = false;
  userForm: ReportsForm = new ReportsForm();
  public data: DataManager;
  public dataSource: IDataOptions;
  public width: string;
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
  }


  getReport()   {
    console.log('inside the validateReportFunction');
    const c = this.reportsForm.value.reportSelect;
    const selectVal2 = this.reportsForm.value.date ;

     const formToSent: ReportsForm = new ReportsForm(this.reportsForm.value.reportSelect, selectVal2.begin, selectVal2.end);

    this.reportService.getReport(formToSent).subscribe(data => {this.reportResult = data;
      if (data.length > 0) {
        this.loadPivoteTable();
      } else {
        this.showEmpty();
      }
    });
  }

    loadPivoteTable() {
      this.showResult = true;
      this.data = new DataManager(this.reportResult);
      this.dataSource = {
        data: this.data,
        expandAll: true,
        rows: [{ name: 'bookName', caption: 'Book Name' }, { name: 'bookLanguage', caption: 'Book Language' } ],
        // columns: [ ],
        // formatSettings: [{ name: 'totalSaleValue', format: 'C', currency: 'IN' }],
        values: [ { name: 'numberOfBooks', caption: 'No.Of Books' }, { name: 'totalSaleValue', caption: 'Sale' }],
        filters: []
        };
      this.width = '100%';
    }

    showEmpty() {
      this.showResult = true;
      this.data = new DataManager();
      this.dataSource = {
        data: null,
        expandAll: false,
        };
      this.width = '100%';
    }
}



