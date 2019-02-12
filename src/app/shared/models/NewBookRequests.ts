export class NewBookRequests {

    id: Number;
    bookName: string;
    language: string;
    bookType: string;
    price: Number;
    abbrivation: string;
    user: string;
    remark: string;
    status: string;

    constructor($id: Number, $bookName: string, $language: string, $bookType: string,
        $price: Number, $abbrivation: string, $user: string, $remark: string, $status: string) {
            this.abbrivation = $abbrivation;
            this.id = $id;
            this.bookName = $bookName;
            this.language = $language;
            this.bookType = $bookType;
            this.price = $price;
            this.user = $user;
            this.remark = $remark;
            this.status = $status;
    }
}
