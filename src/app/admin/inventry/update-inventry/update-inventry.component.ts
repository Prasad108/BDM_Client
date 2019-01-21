import { Component, OnInit } from '@angular/core';
import { Book } from 'app/shared/models/Book';
import { InventryService } from 'app/shared/services/inventry.service';
import { Observable } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Type } from 'app/shared/models/Type';

@Component({
  selector: 'app-update-inventry',
  templateUrl: './update-inventry.component.html',
  styleUrls: ['./update-inventry.component.css']
})
export class UpdateInventryComponent implements OnInit {

  constructor(private inventryService:InventryService, private route: ActivatedRoute) { }

  listOfBook: Book[];
  id: string;
  listOfType: Type[];

  selectedBook;

  ngOnInit() {
    this.inventryService.getAllBooks().subscribe(data=>{
      this.listOfBook=data;
    });
  } 
  getType(event: any){
      console.log(this.selectedBook);
      this.inventryService.getType(this.selectedBook).subscribe(data=> this.listOfType = data);
    }  
   
}
