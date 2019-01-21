import { Component, OnInit } from '@angular/core';
import { CbDetailsService } from 'app/shared/services/cb-details.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CbDetails } from 'app/shared/models/CbDetails';
import { ShairedService } from 'app/shared/services/shaired.service';
import { NgForm } from '@angular/forms';
import { ChallanService } from 'app/shared/services/challan.service';
import { ToastaService } from 'ngx-toasta';
import { Challan } from 'app/shared/models/Challan';
import { Book } from 'app/shared/models/Book';
import {ThreeSelectMode} from 'app/shared/Enum/threeSelectEnum';
@Component({
  selector: 'app-add-new-book-to-challan',
  templateUrl: './add-new-book-to-challan.component.html',
  styleUrls: ['./add-new-book-to-challan.component.css']
})
export class AddNewBookToChallanComponent implements OnInit {
  challanId;
  CbDetails: CbDetails;
  bookDoesNotExistForChallan = false;
  rate: number;
  inventryStock: number;
  bookId: number;
  bookIssuedQuantity: number;
  bookRate: number;
  bookRateError = false;
  bookIssuedQuantityError = false;
  threeSelectMode: ThreeSelectMode = ThreeSelectMode.BOOKS_IN_INVENTORY;
  constructor(
    private cbDetailsService: CbDetailsService,
    private route: ActivatedRoute,
    private router: Router,
    private shairedService: ShairedService,
    private challanService: ChallanService,
    private toastr: ToastaService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.challanId = params.get('id');
    });
  }

  afterSelect(result) {
    this.CbDetails = null;
    this.bookDoesNotExistForChallan = false;
    if (result.bookNameId !== 'default' && result.languageId !== 'default' && result.typeId !== 'default') {
      this.cbDetailsService.getCbDetailFromChallanWithRequestedNameLangType(
        this.challanId, result.bookNameId, result.languageId, result.typeId)
      .subscribe(
        data => {
          console.log(data);
          if (data.found) {
            this.CbDetails = data;
          } else {
            this.bookId = data.bookId;
            this.rate = data.rate;
            this.bookRate = data.rate;
            this.inventryStock = data.inventryStock;
            this.bookDoesNotExistForChallan = true;

          }
        }
       );
    }
  }

  updateCbDetails() {
    this.shairedService.updateCbDetails(this.CbDetails);
    this.router.navigate([this.router.url.slice(0, -11) + '/update']);
  }
  validateRate(): boolean {
    if (this.bookRate < 0 ) {
      this.bookRateError = true;
      return true;
    } else {
      this.bookRateError = false;
      return false;
    }
  }
  validateIssuedQuantity(): boolean {
    if (this.bookIssuedQuantity > this.inventryStock || this.bookIssuedQuantity < 1 || this.bookIssuedQuantity == null) {
        this.bookIssuedQuantityError = true;
        return true;
    } else {
      this.bookIssuedQuantityError = false;
        return false;
    }
  }
  addNewBook() {
    const cb: CbDetails = new CbDetails();
    cb.book = new Book();
    (<Book>cb.book).id = <number>this.bookId;
    (<Challan>cb.challan) = {id: this.challanId};
    cb.quantity = this.bookIssuedQuantity;
    cb.rate = this.bookRate;
    cb.returned = 0;
    cb.saleValue = this.bookRate * this.bookIssuedQuantity;
    this.challanService.addNewBookToChallan(cb).subscribe(
      data => {
        this.toastr.success('New Book added to Challan');
        this.router.navigate([this.router.url.slice(0, -11)]);
      },
      error => this.toastr.error('Error while adding book')
    );

  }

}
