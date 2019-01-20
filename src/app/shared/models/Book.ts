import {Language} from './Language';
import {Type} from './Type';

export class Book {
        public id: number;
        languages: Language | number;
        name: string;
        type: Type | number;
        price: number;


constructor($id?: number, $languages?: Language |number, $name?: string, $type?: Type | number, $price?: number) {
this.id = $id;
this.languages = $languages;
this.name = $name;
this.type = $type;
this.price = $price;
}

}
