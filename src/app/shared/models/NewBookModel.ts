import { User } from './User';

export class NewBook {

    constructor(
        public id ?: number,
        public status ?: string,
        public remark ?: string,
        public bookName?: string,
        public language?: string,
        public bookType?: string,
        public price?: number,
        public abbrivation?: string,
        public user?: User

    ) {
    }
}
