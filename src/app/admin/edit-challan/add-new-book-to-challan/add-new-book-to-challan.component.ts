import { Component, OnInit } from '@angular/core';
import { CbDetails } from 'app/shared/models/CbDetails';
import { Book } from './../../../shared/models/Book';
import { BookService } from './../../../shared/services/book.service';
import { BookName } from './../../../shared/models/BookName';
import { ToastaService } from 'ngx-toasta';
import { Language } from './../../../shared/models/Language';
import { LanguageService } from 'app/shared/services/language.service';
import { TypeService } from 'app/shared/services/type.service';
import { Type } from 'app/shared/models/Type';


@Component({
  selector: 'app-add-new-book-to-challan',
  templateUrl: './add-new-book-to-challan.component.html',
  styleUrls: ['./add-new-book-to-challan.component.css']
})
export class AddNewBookToChallanComponent implements OnInit {
  cbDetails: CbDetails;

  bookNames: BookName[];
  bookLanguages: Language[];
  bookTypes: Type[];
  bookNameId = 'default';
  nameSelectError = false;
  languageId = 'default';
  languageError = false;
  typeId = 'default';
  typeError = false;
  constructor(private bookService: BookService,
              private toastr: ToastaService,
              private languageService: LanguageService,
              private typeService: TypeService
    ) { }

  ngOnInit() {
    this.bookService.getAllBookNameOfUsersInventory().subscribe(data => this.bookNames = data,
      error => this.toastr.error('Error While Fetching Book Names'));
  }

  validateBookName() {
    if (this.bookNameId === 'default') {
      this.nameSelectError = true;
      this.languageId = 'default';
      this.typeId = 'default';
    } else {
      this.nameSelectError = false;
      this.languageId = 'default';
      this.typeId = 'default';
      this.languageService.getAllLanguagesForBookNameInUsersInventory(this.bookNameId)
      .subscribe(data => this.bookLanguages = data);
    }
  }

  validateLanguage() {
    if (this.languageId === 'default') {
      this.languageError = true;
      this.typeId = 'default';
    } else {
      this.languageError = false;
      this.typeId = 'default';
      this.typeService.getAllTypesForBookNameInUsersInventory(this.bookNameId, this.languageId)
      .subscribe(data => this.bookTypes = data);
    }
  }

  validateType() {
  }


}
