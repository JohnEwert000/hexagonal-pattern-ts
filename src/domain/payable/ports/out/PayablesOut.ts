export default class PayablesOut {
    public constructor(
        public readonly status: string,
        public readonly create_date: string,
        public readonly subtotal: number,
        public readonly discount: number,
        public readonly total: number,
        public readonly id?: string,
    ){}
}

export interface IPayableOut {
    get(): Promise<PayablesOut[]>
    create(params: PayablesOut): Promise<void>
}