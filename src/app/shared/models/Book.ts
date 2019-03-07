import { Language } from './Language';
import { Type } from './Type';

export class Book {
  constructor(
    public id?: number,
    public languages?: Language | number | string,
    type?: Type | number | string,
    public name?: string,
    price?: number,
    abrreviation?: string
  ) {}
}
