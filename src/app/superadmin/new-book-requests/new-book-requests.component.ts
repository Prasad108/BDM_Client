import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestNewBookService } from 'app/shared/services/request-new-book.service';
import { NewBook } from 'app/shared/models/NewBookModel';

@Component({
  selector: 'app-new-book-requests',
  templateUrl: './new-book-requests.component.html',
  styleUrls: ['./new-book-requests.component.css']
})
export class NewBookRequestsComponent implements OnInit {

  model: NewBook[];

  constructor(private service: RequestNewBookService) { }

  ngOnInit() {
    console.log("---b---",this.model);
    this.service.getNewBookServiceRequests().subscribe(
      data =>{this.model=data}
    );
    console.log("---a---",this.model);
  }

}
