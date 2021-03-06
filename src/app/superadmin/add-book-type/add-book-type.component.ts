import { Component, OnInit, ViewChild } from '@angular/core';
import { Type } from 'app/shared/models/Type';
import { NgForm } from '@angular/forms';
import { ToastaService } from 'ngx-toasta';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeService } from 'app/shared/services/type.service';

@Component({
  selector: 'app-add-book-type',
  templateUrl: './add-book-type.component.html',
  styleUrls: ['./add-book-type.component.css']
})
export class AddBookTypeComponent implements OnInit {

  typeList: Type[];
  type = new Type(0, '');
  @ViewChild('form3') formName;
  @ViewChild('test') collapse;

  constructor(private typeService: TypeService,
    private toastr: ToastaService) { }

  ngOnInit() {
    this.typeService.getAllType().subscribe(
      data => {
        this.typeList = data;
      }
    );
  }
  submitType(form: NgForm) {
    this.typeService.addType(this.type).subscribe(
      data => {
        this.typeList.push(data);
        this.toastr.success('New Book created successfully!');
        this.type.name = '';
        this.formName.resetForm();
        this.collapse.toggle();
      }
    );
  }
}
