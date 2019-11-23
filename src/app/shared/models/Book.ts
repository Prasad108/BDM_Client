import { Language } from './Language';
import { Type } from './Type';
import { BookName } from './BookName';

export class Book {
  constructor(
    public id?: number,
    public languages?: number | string | Language,
    public type?: number | string | Type,
    public name?: BookName | string,
    public price?: number,
    public abbreviation?: string
  ) {}
}
