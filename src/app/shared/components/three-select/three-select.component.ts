import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CbDetails } from 'app/shared/models/CbDetails';
import { BookService } from './../../../shared/services/book.service';
import { BookName } from './../../../shared/models/BookName';
import { ToastaService } from 'ngx-toasta';
import { Language } from './../../../shared/models/Language';
import { LanguageService } from 'app/shared/services/language.service';
import { TypeService } from 'app/shared/services/type.service';
import { Type } from 'app/shared/models/Type';
@Component({
  selector: 'app-three-select',
  templateUrl: './three-select.component.html',
  styleUrls: ['./three-select.component.css']
})
export class ThreeSelectComponent implements OnInit {
  @Output() threeSelected = new EventEmitter<any>();

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
              private typeService: TypeService
    ) { }

  ngOnInit() {
    this.bookService.getAllBookNameOfUsersInventory().subscribe(data => this.bookNames = data,
      error => this.toastr.error('Error While Fetching Book Names'));
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
      this.languageService.getAllLanguagesForBookNameInUsersInventory(this.bookNameId)
      .subscribe(data => this.bookLanguages = data);
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
      this.typeService.getAllTypesForBookNameInUsersInventory(this.bookNameId, this.languageId)
      .subscribe(data => this.bookTypes = data);
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
