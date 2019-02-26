import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewBook } from 'app/shared/models/NewBookModel';
import { NgForm } from '@angular/forms';
import { RequestNewBookService } from 'app/shared/services/request-new-book.service';
import { ToastaService } from 'ngx-toasta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-new-book',
  templateUrl: './request-new-book.component.html',
  styleUrls: ['./request-new-book.component.css']
})
export class RequestNewBookComponent implements OnInit {

  newBookData = new NewBook();

  constructor(private newBookRequestService: RequestNewBookService, private toastr: ToastaService,
              private router: Router) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.newBookRequestService.postNewBookRequestForm(this.newBookData)
        .subscribe(
          data => {console.log(' data-> ', this.newBookData);
        this.toastr.success('Request sent successfully');
        this.router.navigateByUrl('/admin/inventry/bookRequests');
      },
          err => {console.log('error-> ', err);
        this.toastr.error('Error accoured while sending request');
      }
    );
  }

}
