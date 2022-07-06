import express, { Express, Request, Response } from 'express';

import { Transaction, UseCase as UseCaseTransaction } from '../../domain/transaction';
import { UseCase as UseCasePayable } from '../../domain/payable';
import { TransactionMock, PayablesMock } from '../../infrastructure/mock-api/client';

const app: Express = express();
const port = 3001;
const transactionCreateUseCase = new UseCaseTransaction.Create(new TransactionMock());
const payableCreateUseCase = new UseCasePayable.Create(new PayablesMock());
const payableGetUseCase = new UseCasePayable.Get(new PayablesMock());


app.use(express.json());

app.post('/transaction', async (req: Request, res: Response) => {
    const transaction: Transaction = req.body; // @TODO: tratamento do contrato 
    const transactionMapped = new Transaction(
        transaction.totalAmount,
        transaction.description,
        transaction.paymentType,
        transaction.cardBin,
        transaction.cardLast4,
        transaction.cardCvv,
        transaction.clientName,
        transaction.expirationDate,
    );

    await transactionCreateUseCase.execute(transactionMapped);
    await payableCreateUseCase.execute(transactionMapped);

    res.send({"status": "success"});
});

app.get('/payable', async (req: Request, res: Response) => {
    res.send(await payableGetUseCase.execute());
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
