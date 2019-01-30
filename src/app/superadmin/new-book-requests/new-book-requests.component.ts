import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestNewBookService } from 'app/shared/services/request-new-book.service';
import { NewBook } from 'app/shared/models/NewBookModel';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-book-requests',
  templateUrl: './new-book-requests.component.html',
  styleUrls: ['./new-book-requests.component.css']
})
export class NewBookRequestsComponent implements OnInit {

  model: NewBook[];

  updatedNewBook= new NewBook(0,'','','',0,'','','','');

  status=['Pending','Approved','Rejected'];

  constructor(private service: RequestNewBookService) { }

  ngOnInit() {
    this.service.getNewBookServiceRequests().subscribe(
      data =>{this.model=data}
    );
  }

  onSubmit(form: NgForm){
    console.log('-----',this.updatedNewBook);
  }
}
