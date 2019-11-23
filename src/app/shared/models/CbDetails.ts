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
