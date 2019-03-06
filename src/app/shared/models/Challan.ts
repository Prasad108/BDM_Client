import { User } from './User';
import { CbDetails } from './CbDetails';
export class Challan {
  constructor(
    public id?: number,
    public userByIssuedTo?: User | number,
    public userByIssuedBy?: User | number,
    public issuedDate?: Date,
    public settledDate?: Date,
    public totalAmount?: number,
    public receivedAmount?: number,
    public expAmount?: number,
    public expComment?: string,
    public settled?: any,
    public inventoryChallan?: boolean,
    public addedToInventory?: boolean,
    public cbDetailses?: CbDetails[]
  ) {}
}
