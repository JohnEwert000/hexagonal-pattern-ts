export default class TransactionsOut {
    public constructor(
        public readonly value: number,
        public readonly description: string,
        public readonly method: string,
        public readonly cardNumber: string,
        public readonly cardCvv: number,
        public readonly cardHolderName: string,
        public readonly cardExpirationDate: string,
        public readonly id?: string,
    ){}
}

export interface ITransactionsOut {
    create(params: TransactionsOut): Promise<void>
}