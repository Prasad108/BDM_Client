import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CbDetails } from '../models/CbDetails';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class ShairedService {
  cbDetails: CbDetails;
  public $cbDetails: Subject<CbDetails> = new Subject<CbDetails>();
  user: User;
  public $user: Subject<User> = new Subject<User>();


  constructor() {
    this.$cbDetails.subscribe(data => this.cbDetails = data);
    this.$user.subscribe(data => this.user = data);
  }

  updateCbDetails(data: CbDetails) {
    this.cbDetails = data;
    this.$cbDetails.next(data);
  }

  updateUser(data: User) {
    this.user = data;
    this.$user.next(data);
  }

}
