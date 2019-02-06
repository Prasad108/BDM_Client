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

  updatedNewBook = new NewBook(0, '', '', '', 0, '', '', '', '');

  status = ['Pending', 'Approved', 'Rejected'];

  constructor(private service: RequestNewBookService,
              private toaster: ToastaService) { }

  ngOnInit() {
    this.service.getNewBookServiceRequests().subscribe(
      data => {this.model = data; }
    );
  }

  onSubmit(request: any) {

    this.updatedNewBook.status = request.updatedStatus;
    this.updatedNewBook.remark = request.updatedRemark;
    this.updatedNewBook.id = request.id;
   /* this.updatedNewBook.abbrivation=request.abbrivation;
    this.updatedNewBook.bookName=request.bookName;
    this.updatedNewBook.bookType=request.bookType;
    this.updatedNewBook.id=request.id;
    this.updatedNewBook.language=request.language;
    this.updatedNewBook.price=request.price;
    this.updatedNewBook.user=request.user; */
    console.log(this.updatedNewBook);
    this.service.updateRequest(this.updatedNewBook).subscribe(
       data => {
         console.log('---' , this.updatedNewBook);
        this.toaster.success('Request confirmed');
       },
       err => {
        this.toaster.error('Technical error occured while comfirming the request');
       }
    );
  }
}
