
class BankAccount {
    constructor(accountNumber, accountHolder) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = 0;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.balance}.`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.balance}.`);
        } else if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }

    checkBalance() {
        console.log(`Current balance: $${this.balance}.`);
    }
}

function createAccount(accountNumber, accountHolder) {
    return new BankAccount(accountNumber, accountHolder);
}

const myAccount = createAccount("123456", "Rahul Dev");
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.checkBalance();
myAccount.withdraw(400); 
