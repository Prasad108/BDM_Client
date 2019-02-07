import { Component, OnInit, ViewChild } from '@angular/core';
import { BookNameService } from 'app/shared/services/book-name.service';
import { BookName } from 'app/shared/models/BookName';
import { NgForm } from '@angular/forms';
import { BookService } from 'app/shared/services/book.service';
import { ToastaService } from 'ngx-toasta';

@Component({
  selector: 'app-add-book-name',
  templateUrl: './add-book-name.component.html',
  styleUrls: ['./add-book-name.component.css']
})
export class AddBookNameComponent implements OnInit {

  bookNameList: BookName[];
  clickedFlag: boolean;
  bookName = new BookName(0, '', '');
  @ViewChild('form1') formName;



  constructor(private bookNameService: BookNameService,
              private toastr: ToastaService) { }

  ngOnInit() {
    this.bookNameService.getAllBookName().subscribe(
      data => {
        this.bookNameList = data;
      }
    );
    console.log('---', this.bookNameList);
  }

  clicked($event) {
    this.clickedFlag = true;
  }

  submitBook(form: NgForm) {
    console.log(form);
    this.bookNameService.addBookName(this.bookName).subscribe(
      data => {console.log(this.bookName);
        this.bookNameList.push(data);
        this.toastr.success('New Book created successfully!');
        this.bookName.name = '';
        this.bookName.abbreviation = '';
        this.formName.resetForm();
    },
      err => {console.log(err);
      this.toastr.error('Error in creating Book');
    }
    );

  }

}
