import { Component, OnInit } from '@angular/core';
import { CenterService } from './../../shared/services/center.service';
import { Center } from './../../shared/models/Center';
import { ToastaService } from 'ngx-toasta';
@Component({
  selector: 'app-centers',
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.css']
})
export class CentersComponent implements OnInit {
  centers: Center[];
  constructor(private centerService: CenterService,
    private toastr: ToastaService) { }

  ngOnInit() {
       this.centerService.getAllCenter().subscribe(data => this.centers = data ,
      error => this.toastr.error('error while fetching the center list'));
  }

}
