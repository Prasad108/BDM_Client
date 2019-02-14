import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'assets/js/canvasjs.min.js';
@Component({
  selector: 'app-comman-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Center';
  showYAxisLabel = true;
  yAxisLabel = 'Distributed Books';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
 single = [

  { value: 5000, name: 'Ganga Dham VOICE' },
  { value: 3000, name: 'RVC YOGA' },
  { value: 2050, name: 'Mithila YOGA' },
  { value: 1800,  name: 'Atmanivedan YOGA' },
  { value: 1800,  name: 'Barsana YOGA' },
  { value: 1200,  name: 'RKB YOGA' },
  { value: 1008,  name: 'GGD VOICE' },
  { value: 1000,  name: 'VIT VOICE' },
  { value: 800,  name: 'SRM VOICE' }
];

  constructor() { }

  ngOnInit() {
  }

}
