import { Component, OnInit } from '@angular/core';
import { RequestNewBookService } from 'app/shared/services/request-new-book.service';
import { NewBookRequests } from 'app/shared/models/NewBookRequests';

@Component({
  selector: 'app-book-requests',
  templateUrl: './book-requests.component.html',
  styleUrls: ['./book-requests.component.css']
})
export class BookRequestsComponent implements OnInit {

  requestList: NewBookRequests[];

  constructor(private requestNewBookService: RequestNewBookService) { }

  ngOnInit() {

    this.requestNewBookService.getRequestsByUser().subscribe(
      data => {
        this.requestList = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
