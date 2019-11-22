import { Component, OnInit } from '@angular/core';
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


  constructor(private bookService: BookService,
    private bookNameService: BookNameService,
    private typeService: TypeService,
    private langService: LanguageService,
              private toastr: ToastaService) { }

  ngOnInit() {
    this.bookService.getAllBooksInDetail().subscribe(
      data => {
        this.bookList = data;
      }
      );
      this.bookNameService.getAllBookName().subscribe(
        data => {
          this.bookNameList = data;
        }
      );
  }

  
  afterSelect(result) {
    if (result.bookNameId !== 'default' && result.languageId !== 'default' && result.typeId !== 'default') {
        console.log("result.bookNameId " +result.bookNameId);
        console.log("result.languageId "+ result.languageId);
        console.log("result.typeId "+result.typeId);
    }
  }
}
