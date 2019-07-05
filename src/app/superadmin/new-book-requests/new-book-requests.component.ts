import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestNewBookService } from 'app/shared/services/request-new-book.service';
import { NewBook } from 'app/shared/models/NewBookModel';
import { NgForm } from '@angular/forms';
import { ToastaEvent, ToastaService } from 'ngx-toasta';

@Component({
  selector: 'app-new-book-requests',
  templateUrl: './new-book-requests.component.html',
  styleUrls: ['./new-book-requests.component.css']
})
export class NewBookRequestsComponent implements OnInit {

  model: NewBook[];
  flag: boolean;

  updatedNewBook = new NewBook();

  status = ['Approved', 'Rejected'];

  constructor(private service: RequestNewBookService,
              private toaster: ToastaService) { }

  ngOnInit() {
    this.service.getNewBookServiceRequests().subscribe(
      data => {this.model = data; }
    );
  }

  validateStatus(updatedStatus: String) {
    // console.log(updatedStatus);
  }

  onSubmit(request: any) {

    this.updatedNewBook.status = request.updatedStatus.toLowerCase();
    request.status = request.updatedStatus.toLowerCase();
    this.updatedNewBook.remark = request.updatedRemark;
    request.remark = request.updatedRemark;
    this.updatedNewBook.id = request.id;
    this.service.updateRequest(this.updatedNewBook).subscribe(
       data => {
         this.flag = true;
        this.toaster.success('Request confirmed');
       },
       err => {
         this.flag = false;
        this.toaster.error('Technical error occured while comfirming the request');
       }
    );
  }
}
