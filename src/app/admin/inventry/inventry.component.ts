import { Component, OnInit } from '@angular/core';
import { Book } from 'app/shared/models/Book';
import { InventryService } from 'app/shared/services/inventry.service';

@Component({
  selector: 'app-inventry',
  templateUrl: './inventry.component.html',
  styleUrls: ['./inventry.component.css']
})
export class InventryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
