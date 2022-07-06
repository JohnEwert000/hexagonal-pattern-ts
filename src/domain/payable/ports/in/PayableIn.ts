import Payable from '../../payable'
import { Transaction } from '../../../transaction'

export interface IPayableIn {
    execute(params: Transaction): Promise<Payable>
}