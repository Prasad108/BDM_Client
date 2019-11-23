import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from 'app/shared/models/Book';
import { ToastaService } from 'ngx-toasta';
import { BookService } from './../../shared/services/book.service';
import { BookNameService } from 'app/shared/services/book-name.service';
import { LanguageService } from 'app/shared/services/language.service';
import { TypeService } from 'app/shared/services/type.service';
import { Language } from 'app/shared/models/Language';
import { Type } from 'app/shared/models/Type';
import { BookName } from 'app/shared/models/BookName';
import {ThreeSelectMode} from 'app/shared/Enum/threeSelectEnum';



@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

  bookList: Book[];
  bookNameList: BookName[];
  langsList: Language[];
  typeList: Type[];
  threeSelectMode: ThreeSelectMode = ThreeSelectMode.ADD_NEW_BOOK;
  addNewBook = false;
  bookPrice: number;
  bookPriceError = false;
  bookAbbreviation: String;
  bookAbbreviationError = false;
  nameId: number;
  typeId: number;
  langId: number;
  resetThreeSelect = false;
  @ViewChild('AddNewBook') formName;
  @ViewChild('test') collapse;


  constructor(private bookService: BookService,
    private bookNameService: BookNameService,
    private typeService: TypeService,
    private langService: LanguageService,
              private toastr: ToastaService) { }

  ngOnInit() {
    this.fetchTheBookList();
  }

  fetchTheBookList() {
    this.bookService.getAllBooksInDetail().subscribe(
      data => {
        this.bookList = data;
      },
      error => console.log('error in fetching the book list')
      );
  }

  afterSelect(result) {
    if (result.bookNameId !== 'default' && result.languageId !== 'default' && result.typeId !== 'default') {
      this.resetThreeSelect = false;
      this.nameId = result.bookNameId;
      this.typeId = result.typeId;
      this.langId = result.languageId;
      this.bookService.checkIfBookIsPresent(result.bookNameId, result.languageId, result.typeId).subscribe(
        data => {
          if (data == null) {
              this.addNewBook = true;
          } else {
            this.toastr.warning('Book is already there in system' );
          }
        },
        error => {
          this.addNewBook = false;
        }
      );
    } else {
      this.addNewBook = false;
    }
  }

  validatePrice() {
    if (this.bookPrice <= 0 ) {
      this.bookPriceError = true;
    } else {
      this.bookPriceError = false;
    }
  }

  saveNewBook() {
    this.bookService.createNewBook(this.nameId, this.langId, this.typeId, this.bookPrice, this.bookAbbreviation)
      .subscribe(result => {
        this.toastr.success('New Book added');
        this.formName.resetForm();
        this.collapse.toggle();
        this.addNewBook = false;
        this.resetThreeSelect = true;
        this.fetchTheBookList();

      },
        error => {
          this.toastr.error('Error in adding new Book');
          this.toastr.error('Error while adding book');
          this.formName.resetForm();
          this.collapse.toggle();
          this.addNewBook = false;
       });
  }
}
