import { ITransactionIn } from '../ports/in/TransactionIn'
import TransactionsOut, { ITransactionsOut } from '../ports/out/TransactionsOut'
import Transaction from '../transaction'

export default class CreateTransaction implements ITransactionIn {
    public constructor(
        private readonly Transactions: ITransactionsOut
    ){}

    public async execute(params: Transaction): Promise<boolean> {
        this.Transactions.create(
            new TransactionsOut(
                params.totalAmount,
                params.description,
                params.paymentType,
                params.cardBin + '****' + params.cardLast4,
                params.cardCvv,
                params.clientName,
                params.expirationDate
            )
        )

        return true;
    }
}