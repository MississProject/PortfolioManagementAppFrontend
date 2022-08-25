export class StockOrder {
    constructor (
        public orderStatus: number,
        public numOfShares: number,
        public stockSymbol: string,
        public userEmail: string,
        public orderID?: number
    ) {}
}
