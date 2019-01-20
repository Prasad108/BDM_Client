import {Book} from './Book';
import {Challan} from './Challan';

export class CbDetails {
      id: number;
      book: Book | number;
      challan: Challan | number;
      rate: number;
      quantity: number;
      returned: number;
      saleValue: number;



        public get $id(): number {
        return this.id;
        }


        public get $book(): Book | number {
        return this.book;
        }


        public get $challan(): Challan | number  {
        return this.challan;
        }


        public get $rate(): number {
        return this.rate;
        }


        public get $quantity(): number {
        return this.quantity;
        }


        public get $returned(): number {
        return this.returned;
        }


        public get $saleValue(): number {
        return this.saleValue;
        }


        public set $id(value: number) {
        this.id = value;
        }


        public set $book(value: Book | number) {
        this.book = value;
        }


        public set $challan(value: Challan | number) {
        this.challan = value;
        }


        public set $rate(value: number) {
        this.rate = value;
        }


        public set $quantity(value: number) {
        this.quantity = value;
        }


        public set $returned(value: number) {
        this.returned = value;
        }


        public set $saleValue(value: number) {
        this.saleValue = value;
        }


    constructor($id?: number, $book?: Book |number, $challan?: Challan |number ,
        $rate?: number, $quantity?: number, $returned?: number, $saleValue?: number) {
        this.id = $id;
        this.book = $book;
        this.challan = $challan;
        this.rate = $rate;
        this.quantity = $quantity;
        this.returned = $returned;
        this.saleValue = $saleValue;
    }



}
