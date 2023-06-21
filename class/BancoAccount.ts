export abstract class BancoAccount {
    private name: string;
    private readonly accountNumber: number;
    balance: number = 0;
    private status: boolean = true;
  
    constructor(name: string, accountNumber: number) {
      this.name = name;
      this.accountNumber = accountNumber;
    }
  
    getName = (): string => {
      return this.name;
    };
  
    deposit = (amount: number): void => {
      if (this.validateStatus()) {
        this.balance += amount;
        console.log(`Depósito realizado: R$${amount}`);
      }
    };
  
    withdraw = (amount: number): void => {
      if (this.validateStatus() && this.balance >= amount) {
        this.balance -= amount;
        console.log(`Saque realizado: R$${amount}`);
      } else {
        console.log("Saldo insuficiente ou conta inválida.");
      }
    };
  
    getBalance = (): void => {
      console.log(`Saldo atual: R$${this.balance}`);
    };
  
    validateStatus = (): boolean => {
      if (this.status) {
        return true;
      }
      throw new Error("Conta inválida.");
    };
  }