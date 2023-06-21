import { BancoAccount } from "./BancoAccount";

export class BonusAccount extends BancoAccount {
  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount + 10;
      console.log(`Depósito com bônus realizado: R$${amount + 10}`);
    }
  };
}