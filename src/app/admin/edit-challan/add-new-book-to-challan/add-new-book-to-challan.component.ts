import { Component, OnInit } from '@angular/core';
import { CbDetails } from 'app/shared/models/CbDetails';
import { Book } from './../../../shared/models/Book';
import { BookService } from './../../../shared/services/book.service';
import { BookName } from './../../../shared/models/BookName';
import { ToastaService } from 'ngx-toasta';
import { Language } from './../../../shared/models/Language';

@Component({
  selector: 'app-add-new-book-to-challan',
  templateUrl: './add-new-book-to-challan.component.html',
  styleUrls: ['./add-new-book-to-challan.component.css']
})
export class AddNewBookToChallanComponent implements OnInit {
  cbDetails: CbDetails;
  id = 'default';
  bookNames: BookName[];
  bookLanguage: Language[];
  constructor(private bookService: BookService,
              private toastr: ToastaService
    ) { }

  ngOnInit() {
    this.bookService.getAllBookNameOfUsersInventory().subscribe(data => this.bookNames = data,
      error => this.toastr.error('Error While Fetching Book Names'));
  }

}
