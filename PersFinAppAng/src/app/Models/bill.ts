import { Expense } from "../Models/expense";

export class Bill {
  constructor(
    public id: number,
    public date: string,
    public vendor: string,
    public sum : number,
    public expsense: Expense[]
    ) {}
}
