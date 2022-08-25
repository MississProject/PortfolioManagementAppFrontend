export class StockOrder {
    constructor (
        public orderID: number,
        public orderStatus: number,
        public numOfShares: number,
        public stockSymbol: string,
        public userEmail: string
    ) {}
} 