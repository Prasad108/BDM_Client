import { Component, OnInit, Input } from '@angular/core';
import {Challan} from 'app/shared/models/Challan';

@Component({
  selector: 'app-challans',
  templateUrl: './challans.component.html',
  styleUrls: ['./challans.component.css']
})
export class ChallansComponent implements OnInit {
  @Input() challan: Challan[];


  constructor() { }

  ngOnInit() {
  }

}
