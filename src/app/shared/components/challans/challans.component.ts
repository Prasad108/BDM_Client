import { Component, OnInit, Input } from '@angular/core';
import {Challan} from 'app/shared/models/Challan';
import { TokenStorageService } from 'app/shared/services/token-storage.service';
@Component({
  selector: 'app-challans',
  templateUrl: './challans.component.html',
  styleUrls: ['./challans.component.css']
})
export class ChallansComponent implements OnInit {
  @Input() challanList: Challan[];
  roles: string[] = [];

  constructor( private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

}
