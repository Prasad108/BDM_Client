import {User} from './User';
export class Challan {
        id: number;
        userByIssuedTo: User | number;
        userByIssuedBy: User | number;
        issuedDate: Date;
        settledDate: Date;
        totalAmount: number;
        receivedAmount: number;
        expAmount: number;
        expComment: string;
        settled: any;

    constructor($id: number, $userByIssuedTo: User |number, $userByIssuedBy: User |number,
         $issuedDate: Date, $settledDate: Date, $totalAmount: number,
         $receivedAmount: number, $expAmount: number, $expComment: string) {
        this.id = $id;
        this.userByIssuedTo = $userByIssuedTo;
        this.userByIssuedBy = $userByIssuedBy;
        this.issuedDate = $issuedDate;
        this.settledDate = $settledDate;
        this.totalAmount = $totalAmount;
        this.receivedAmount = $receivedAmount;
        this.expAmount = $expAmount;
        this.expComment = $expComment;
    }

}
