export enum TransactionType {
    DEBIT_CARD='debit_card',
    CREDIT_CARD='credit_card'
}

export default class Transaction {
    public constructor(
        public readonly totalAmount: number,
        public readonly description: string,
        public readonly paymentType: TransactionType,
        public readonly cardBin: number,
        public readonly cardLast4: number,
        public readonly cardCvv: number,
        public readonly clientName: string,
        public readonly expirationDate: string,
        public readonly id?: string,
    ){}

    public isTransactionDebit(){
        return this.paymentType == TransactionType.DEBIT_CARD;
    }
}