import { User } from './User';

export class ReportsForm {
    constructor(
        private reportName: string,
        private startDate: Date,
        private endDate: Date,
        private users: User[]
    ) {}
}
