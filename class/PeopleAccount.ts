import { BancoAccount } from "./BancoAccount";

export class PeopleAccount extends BancoAccount {
  doc_id: number;

  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }
}