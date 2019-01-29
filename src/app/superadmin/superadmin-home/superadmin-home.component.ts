import { Component, OnInit } from '@angular/core';
import { NewBook } from 'app/shared/models/NewBookModel';

@Component({
  selector: 'app-superadmin-home',
  templateUrl: './superadmin-home.component.html',
  styleUrls: ['./superadmin-home.component.css']
})
export class SuperadminHomeComponent implements OnInit {

  constructor() { }

  newBook : NewBook;

  ngOnInit() {
  }

}
