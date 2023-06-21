import { BancoAccount } from "./BancoAccount";

export class CompanyAccount extends BancoAccount {
  getLoan = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount;
      console.log(`Empréstimo realizado: R$${amount}`);
    }
  };
}