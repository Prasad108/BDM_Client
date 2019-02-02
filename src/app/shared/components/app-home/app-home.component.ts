import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'assets/js/canvasjs.min.js';
@Component({
  selector: 'app-comman-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let dataPoints = [
      { y: 5000, label: 'Ganga Dham VOICE' },
      { y: 2800, label: 'RVC YOGA' },
      { y: 2050, label: 'Mithila YOGA' },
      { y: 1800,  label: 'Atmanivedan YOGA' },
      { y: 1800,  label: 'Barsana YOGA' },
      { y: 1200,  label: 'RKB YOGA' },
      { y: 1008,  label: 'GGD VOICE' },
      { y: 1000,  label: 'VIT VOICE' },
      { y: 800,  label: 'SRM VOICE' },
    ];

    let chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      title: {
        text: 'Top Book Distributing Centers of 2018'
      },
      axisY: {
        title: 'Distributed Books',
      },
      theme: 'light2',
      axisX: {
        title: 'Centers'
      },
      data: [{
        type: 'column',
        dataPoints : dataPoints
      }]
    });
    chart.render();
  }

}
