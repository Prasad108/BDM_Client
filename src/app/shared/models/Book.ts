import {Language} from './Language';
import {Type} from './Type';

export class Book {
//         public id: number;
//         languages: Language | number;
//         name: string;
//         type: Type | number;
//         price: number;
//         abrreviation: string;


// constructor($id?: number, $languages?: Language |number, $name?: string, $type?: Type | number, $price?: number, $abrreviation?: string) {
// this.id = $id;
// this.languages = $languages;
// this.name = $name;
// this.type = $type;
// this.price = $price;
// this.abrreviation = $abrreviation;
// }

// tslint:disable-next-line:max-line-length
constructor(public id ?: number, public languages ?: Language | number | string, type ?: Type | number | string, public name ?: string,  price ?: number, abrreviation ?: string) {
}
}
