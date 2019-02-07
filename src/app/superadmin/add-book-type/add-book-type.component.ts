import { Component, OnInit, ViewChild } from '@angular/core';
import { BookTypeService } from 'app/shared/services/book-type.service';
import { Type } from 'app/shared/models/Type';
import { NgForm } from '@angular/forms';
import { ToastaService } from 'ngx-toasta';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-add-book-type',
  templateUrl: './add-book-type.component.html',
  styleUrls: ['./add-book-type.component.css']
})
export class AddBookTypeComponent implements OnInit {

  typeList: Type[];
  type = new Type(0, '');
  @ViewChild('form3') formName;

  constructor(private typeService: BookTypeService,
    private toastr: ToastaService) { }

  ngOnInit() {
    this.typeService.getAllType().subscribe(
      data => {
        this.typeList = data;
      }
    );
  }
  submitType(form: NgForm) {
    console.log(this.type);
    this.typeService.addType(this.type).subscribe(
      data => {
        console.log(this.type);
        this.typeList.push(this.type);
        this.toastr.success('New Book created successfully!');
        this.type.name = '';
        this.formName.resetForm();
      }
    );
  }
}
