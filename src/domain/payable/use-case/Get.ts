import { IPayableIn } from '../ports/in/PayableIn'
import { IPayableOut } from '../ports/out/PayablesOut'
import Payable from '../payable'

export default class GetPayable implements IPayableIn {
    public constructor(
        private readonly Payables: IPayableOut
    ){}

    public async execute(): Promise<Payable> {
        await this.Payables.get() 
        // @TODO implementar GetAll Mapping
        return new Payable(0,0,0)
    }
}