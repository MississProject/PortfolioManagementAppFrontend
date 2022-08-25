export class StockOrderWithCost {
    constructor (
        public orderID: number | undefined,
        public orderStatus: number,
        public numOfShares: number,
        public stockSymbol: string,
        public userEmail: string,
        public cost: number
    ) {}
}