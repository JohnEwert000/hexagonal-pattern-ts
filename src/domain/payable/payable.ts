export default class Payable {
    public constructor(
        public readonly totalAmountAvailable: number,
        public readonly totalAmountUnavailable: number,
        public readonly totalFees: number
    ){}
}