import Transaction from '../../transaction'

export interface ITransactionIn {
    execute(params: Transaction): Promise<boolean>
}