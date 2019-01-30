import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewBook } from 'app/shared/models/NewBookModel';
import { NgForm } from '@angular/forms';
import { RequestNewBookService } from 'app/shared/services/request-new-book.service';

@Component({
  selector: 'app-request-new-book',
  templateUrl: './request-new-book.component.html',
  styleUrls: ['./request-new-book.component.css']
})
export class RequestNewBookComponent implements OnInit {

  newBookData = new NewBook(0,'','','',0,'','','','');

  constructor(private newBookRequestService: RequestNewBookService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form);
    this.newBookRequestService.postNewBookRequestForm(this.newBookData)
        .subscribe(
          data => console.log("data->",this.newBookData),
          err => console.log("error-> ",err)
        )
  }

}
