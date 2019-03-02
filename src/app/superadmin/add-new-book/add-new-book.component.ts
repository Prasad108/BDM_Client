import { Component, OnInit } from '@angular/core';
import { Book } from 'app/shared/models/Book';
import { ToastaService } from 'ngx-toasta';
import { BookService } from './../../shared/services/book.service';
import {ThreeSelectMode} from 'app/shared/Enum/threeSelectEnum';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

  bookDoesNotSelected= false;
  bookPrice: number;
  bookPriceError = false;
  bookList: Book[];
  threeSelectMode: ThreeSelectMode = ThreeSelectMode.ADD_NEW_BOOK;

  constructor(private bookService: BookService,
              private toastr: ToastaService) { }

  ngOnInit() {
    this.bookService.getAllBooksInDetail().subscribe(
      data => {
        this.bookList = data;
        console.log(this.bookList);
      }
      );
  }

  afterSelect(result){
    if (result.bookNameId !== 'default' && result.languageId !== 'default' && result.typeId !== 'default') {
    this.bookDoesNotSelected=true;
    }
  }

  validatePrice(): boolean {
    if (this.bookPrice < 0 ) {
      this.bookPriceError = true;
      return true;
    } else {
      this.bookPriceError= false;
      return false;
    }
  }
}
