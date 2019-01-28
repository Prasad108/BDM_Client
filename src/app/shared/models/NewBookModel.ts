
export class NewBook{

    constructor(
        public id: number,
        public bookName: string,
        public language: string,
        public bookType: string,
        public price: number,
        public abbrivation: string,
        public user: string,
        public status: string,
        public remark: string
    ){
        
    }
}