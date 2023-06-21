import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { BonusAccount } from "./class/BonusAccount";

const peopleAccount = new PeopleAccount(123456789, "Fulano", 1234);
const companyAccount = new CompanyAccount("Empresa ABC", 5678);
const bonusAccount = new BonusAccount("Conta Bônus", 9876);

console.log("\nconta pessoa")
peopleAccount.deposit(100); // Depósito realizado: R$100
peopleAccount.getBalance(); // Saldo atual: R$100
peopleAccount.withdraw(50); // Saque realizado: R$50
peopleAccount.getBalance(); // Saldo atual: R$50

console.log("\nconta empresa")
companyAccount.deposit(1000); // Depósito realizado: R$1000
companyAccount.getBalance(); // Saldo atual: R$1000
companyAccount.withdraw(50); // Saque realizado: R$50
companyAccount.getBalance(); // Saldo atual: R$950

console.log("\nconta bonus")
bonusAccount.deposit(100); // Depósito realizado: R$100 + R$10 de bonus
bonusAccount.getBalance(); // Saldo atual: R$110
bonusAccount.withdraw(50); // Saque realizado: R$50
bonusAccount.getBalance(); // Saldo atual: R$60