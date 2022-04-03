class BankAccount {
  constructor(funds) {
    this.funds = funds;
  }
  deposit(liquid) {
    this.funds += liquid;
  }
  withdraw(liquid) {
    this.funds += liquid;
  }
  view() {
    console.log(this.funds);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
