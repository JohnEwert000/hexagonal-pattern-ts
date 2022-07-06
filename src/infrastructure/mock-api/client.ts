import axios from "axios";
import PayablesOut, { IPayableOut } from "../../domain/payable/ports/out/PayablesOut"
import TransactionsOut, { ITransactionsOut } from "../../domain/transaction/ports/out/TransactionsOut"

export class TransactionMock implements ITransactionsOut {

    public async create(payload: TransactionsOut): Promise<void> {
        await axios.post('http://localhost:8080/transactions', payload);
    }
}

export class PayablesMock implements IPayableOut {

    public async get(): Promise<PayablesOut[]> {
        await axios.get('http://localhost:8080/payables')
        .then(resp => {
            console.log(resp.data);
        });

        return [new PayablesOut("0","0",0,0,0,"0")]
    }

    public async create(params: PayablesOut): Promise<void> {
        await axios.post('http://localhost:8080/payables', params);
    }
}