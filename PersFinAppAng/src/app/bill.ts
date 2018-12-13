export class Bill {
  constructor(
    public id: number,
    public date: Date,
    public vendor: string,
    public sum : number) {}
}
