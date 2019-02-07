import { Component, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from 'app/shared/services/language.service';
import { Language } from 'app/shared/models/Language';
import { NgForm } from '@angular/forms';
import { ToastaService } from 'ngx-toasta';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {

    langs: Language[];
    @ViewChild('form2') formName;
    lang = new Language(0, '');

  constructor(private langService: LanguageService,
    private toastr: ToastaService) { }

  ngOnInit() {
    this.langService.getAllLanguage().subscribe(
      data => {
        this.langs = data;
      }
    );
    }
    submitLang(form: NgForm) {
      console.log(this.lang);
      this.langService.addLanguage(this.lang).subscribe(
        data => {
          console.log(this.lang);
          this.langs.push(this.lang);
          this.toastr.success('New Book created successfully!');
         /*  this.lang.name = '';
          this.formName.resetForm(); */
        }
      );
    }
}
