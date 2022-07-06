import { IPayableIn } from '../ports/in/PayableIn'
import { Transaction } from '../../transaction'

import PayablesOut, { IPayableOut } from '../ports/out/PayablesOut'
import Payable from '../payable'


export default class CreatePayable implements IPayableIn {
    public constructor(
        private readonly Payables: IPayableOut
    ){}

    public async execute(params: Transaction): Promise<Payable> {
        const totalFee = this.payableFee(params)

        this.Payables.create(new PayablesOut(
            params.isTransactionDebit() ? 'paid' : 'waiting_funds',
            this.payableDate(params),
            params.totalAmount,
            totalFee,
            params.totalAmount - totalFee,
        ))
        
        return new Payable(0,0,0)
    }
    
    private payableDate(params: Transaction) {
        var date = new Date();

        if(params.isTransactionDebit()) {
            date.setDate(date.getDate() + 30);
        }

        return ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear()
    }

    private payableFee(params: Transaction) {
        const fee = params.isTransactionDebit() ? 0.02 : 0.04
        return params.totalAmount * fee
    }
}