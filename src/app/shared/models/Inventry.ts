import {Book} from './Book';
import {Center} from './Center';
export class Inventry {
    id: number;
    book: Book |number;
    center: Center | number;

constructor($id: number, $book: Book |number, $center: Center | number) {
    this.id = $id;
    this.book = $book;
    this.center = $center;
}

}
