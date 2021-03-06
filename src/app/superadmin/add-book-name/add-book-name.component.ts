import { Component, OnInit, ViewChild } from '@angular/core';
import { BookNameService } from 'app/shared/services/book-name.service';
import { BookName } from 'app/shared/models/BookName';
import { NgForm } from '@angular/forms';
import { ToastaService } from 'ngx-toasta';

@Component({
  selector: 'app-add-book-name',
  templateUrl: './add-book-name.component.html',
  styleUrls: ['./add-book-name.component.css']
})
export class AddBookNameComponent implements OnInit {

  bookNameList: BookName[];
  clickedFlag: boolean;
  bookName = new BookName();
  @ViewChild('form1') formName;
  @ViewChild('test') collapse;



  constructor(private bookNameService: BookNameService,
              private toastr: ToastaService) { }

  ngOnInit() {
    this.bookNameService.getAllBookName().subscribe(
      data => {
        this.bookNameList = data;
      }
    );
  }

  clicked($event) {
    this.clickedFlag = true;
  }

  submitBook(form: NgForm) {
    this.bookNameService.addBookName(this.bookName).subscribe(
      data => {
        this.bookNameList.push(data);
        this.toastr.success('New Book Name created successfully!');
        this.bookName.name = '';
        this.formName.resetForm();
        this.collapse.toggle();
    },
      err => {
      this.toastr.error('Error in creating new Book Name');
    }
    );

  }

}
