import { Component, OnInit } from '@angular/core';
import { BookName } from 'app/shared/models/BookName';
import { NgForm } from '@angular/forms';
import { BookService } from 'app/shared/services/book.service';
import { Language } from 'app/shared/models/Language';
import { Type } from 'app/shared/models/Type';
import { ToastaService } from 'ngx-toasta';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
export class BookManagementComponent implements OnInit {

  bookName = new BookName(0, '', '');
  language = new Language(0, '');
  type = new Type(0, '');

  constructor(private bookNameService: BookService, private toastr: ToastaService) { }

  ngOnInit() {
  }

  /* submitBook(form: NgForm) {
    console.log(form);
    this.bookNameService.addBookName(this.bookName).subscribe(
      data => {console.log(this.bookName);
      this.toastr.success('New Book created successfully!');
    },
      err => {console.log(err);
      this.toastr.error('Error in creating Book');
    }
    );
  } */

  submitLang(form: NgForm) {
    console.log(form);
    this.bookNameService.addLanguage(this.language).subscribe(
      data => {console.log(this.bookName);
      this.toastr.success('Book Language created successfully!'); },
      err => {console.log(err),
        this.toastr.error('Error in creating Book');
      }
    );
  }

  submitType(form: NgForm) {
    console.log(form.value);
    this.bookNameService.addType(this.type).subscribe(
      data => {console.log(this.bookName);
      this.toastr.success('Book Type created successfully!');
    },
      err => {console.log(err),
        this.toastr.error('Error in creating Book');
      }
    );
  }

}
