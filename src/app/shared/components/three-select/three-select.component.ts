import { Component, EventEmitter, OnInit, Output, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CbDetails } from 'app/shared/models/CbDetails';
import { BookService } from './../../../shared/services/book.service';
import { BookName } from './../../../shared/models/BookName';
import { ToastaService } from 'ngx-toasta';
import { Language } from './../../../shared/models/Language';
import { LanguageService } from 'app/shared/services/language.service';
import { TypeService } from 'app/shared/services/type.service';
import { Type } from 'app/shared/models/Type';
import {ThreeSelectMode} from 'app/shared/Enum/threeSelectEnum';
import { BookNameService } from 'app/shared/services/book-name.service';
@Component({
  selector: 'app-three-select',
  templateUrl: './three-select.component.html',
  styleUrls: ['./three-select.component.css']
})
export class ThreeSelectComponent implements OnInit {
  @Output() threeSelected = new EventEmitter<any>();
  @Input() mode: ThreeSelectMode;
  @Input() set reset(value: boolean) {
    if ( value === true) {
      this.bookNameId = 'default';
      this.languageId = 'default';
      this.typeId = 'default';
    }
}
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
  result: any = {} ;
  constructor(private bookService: BookService,
              private toastr: ToastaService,
              private languageService: LanguageService,
              private typeService: TypeService,
              private bookNameService: BookNameService
    ) { }

  ngOnInit() {
    switch (this.mode) {
      case ThreeSelectMode.BOOKS_IN_INVENTORY: {
            this.bookService.getAllBookNameOfUsersInventory().subscribe(data => this.bookNames = data,
              error => this.toastr.error('Error While Fetching Book Names'));
         break;
      }
      case ThreeSelectMode.BOOKS_NOT_IN_INVENTORY: {
         break;
      }
      case ThreeSelectMode.ALL_BOOKS: {
        this.bookService.getBooNameOfAllBooks().subscribe(data => this.bookNames = data,
          error => this.toastr.error('Error While Fetching Book Names'));
        break;
     }
     case ThreeSelectMode.ADD_NEW_BOOK: {
      this.bookNameService.getAllBookName().subscribe(data => this.bookNames = data,
        error => this.toastr.error('Error While Fetching Book Names'));
      break;
    }
      default: {
         break;
      }
   }
  }

  validateBookName() {
    if (this.bookNameId === 'default') {
      this.nameSelectError = true;
      this.typeError = false;
      this.languageError = false;
      this.languageId = 'default';
      this.typeId = 'default';
      this.fireEmit();
    } else {
      this.nameSelectError = false;
      this.languageError = false;
      this.typeError = false;
      this.languageId = 'default';
      this.typeId = 'default';
      this.fireEmit();
      switch (this.mode) {
        case ThreeSelectMode.BOOKS_IN_INVENTORY: {
              this.languageService.getAllLanguagesForBookNameInUsersInventory(this.bookNameId)
              .subscribe(data => this.bookLanguages = data);
           break;
        }
        case ThreeSelectMode.BOOKS_NOT_IN_INVENTORY: {
           break;
        }
        case ThreeSelectMode.ALL_BOOKS: {
          this.languageService.getLanguagesOfAllBooksHavingBookName(this.bookNameId)
          .subscribe(data => this.bookLanguages = data);
          break;
       }
       case ThreeSelectMode.ADD_NEW_BOOK: {
        this.languageService.getAllLanguage()
        .subscribe(data => this.bookLanguages = data);
        break;
      }
        default: {
           break;
        }
     }

    }
  }

  validateLanguage() {
    if (this.languageId === 'default') {
      this.languageError = true;
      this.typeError = false;
      this.typeId = 'default';
      this.fireEmit();
    } else {
      this.languageError = false;
      this.typeError = false;
      this.typeId = 'default';
      this.fireEmit();
      switch (this.mode) {
        case ThreeSelectMode.BOOKS_IN_INVENTORY: {
          this.typeService.getAllTypesForBookNameInUsersInventory(this.bookNameId, this.languageId)
          .subscribe(data => this.bookTypes = data);
           break;
        }
        case ThreeSelectMode.BOOKS_NOT_IN_INVENTORY: {
           break;
        }
        case ThreeSelectMode.ALL_BOOKS: {
          this.typeService.getAllTypesForBookNameAndLanguageFromAllBooks(this.bookNameId, this.languageId)
          .subscribe(data => this.bookTypes = data);
          break;
       }
       case ThreeSelectMode.ADD_NEW_BOOK: {
        this.typeService.getAllType()
        .subscribe(data => this.bookTypes = data);
        break;
      }
        default: {
           break;
        }
     }
    }
  }

  validateType() {
    if (this.typeId === 'default') {
      this.typeError = true;
      this.fireEmit();
    } else {
      this.typeError = false;
      this.fireEmit();
    }
  }

  fireEmit() {
    this.result.bookNameId = this.bookNameId;
    this.result.languageId = this.languageId;
    this.result.typeId = this.typeId;
    this.threeSelected.emit(this.result);
  }


}
