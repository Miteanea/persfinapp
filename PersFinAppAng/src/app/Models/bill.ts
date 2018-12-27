export class Bill {
  constructor(
    public id: number,
    public date: string,
    public vendor: string,
    public sum : number,
    public expsense: Expense[]
    ) {}
}
export class Expense {
  constructor(
    private name: string,
    private quantity: number,
    private price: number,
    private category: string,
  ) {}
}
