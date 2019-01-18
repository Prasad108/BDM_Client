import { Component, OnInit } from '@angular/core';
import { Book } from 'app/shared/models/Book';
import { InventryService } from 'app/shared/services/inventry.service';

@Component({
  selector: 'app-update-inventry',
  templateUrl: './update-inventry.component.html',
  styleUrls: ['./update-inventry.component.css']
})
export class UpdateInventryComponent implements OnInit {

  constructor(private inventryService:InventryService) { }

  listOfBook: Book[];

  ngOnInit() {
    this.inventryService.getAllBooks().subscribe(data=>{
      this.listOfBook=data;
    });
    console.log(this.listOfBook);

  }

}
