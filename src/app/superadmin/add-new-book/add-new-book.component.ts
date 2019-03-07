import { Component, OnInit } from '@angular/core';
import { Book } from 'app/shared/models/Book';
import { ToastaService } from 'ngx-toasta';
import { BookService } from './../../shared/services/book.service';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

  bookList: Book[];

  constructor(private bookService: BookService,
              private toastr: ToastaService) { }

  ngOnInit() {
    this.bookService.getAllBooksInDetail().subscribe(
      data => {
        this.bookList = data;
      }
      );
  }
}
