package _05_BankAccount;

public class BankAccount {
    String AccountHolder;
    String AccountNumber;
    double balance;

    BankAccount() {
        System.out.println("Account is created");
    }

    void displayAccountDetails(){
        System.out.println("Account Holder "+ AccountHolder);
        System.out.println("Account Number " + AccountNumber  );
        System.out.println("Balance        " + balance);
    }

    void diposit(double amount){
        if (amount <= 0) {
            System.out.println("Amount can't be negative or 0");
            return ;
        }
        this.balance += amount;
        System.out.println("Current Balance "+ balance);
    }

    void withdraw(double amount){
        if (amount > this.balance) {
            System.out.println("Insufficent balance");
            return ;
        }
        if (amount < 0) {
            System.out.println("Amount can't be negative or 0");
            return ;
        }

        balance -= amount;
        System.out.println("Withdrow Amount. => "+ amount );
        System.out.println("Current Balance. => "+ balance );
        
    }
    double getBalance(){
        System.out.println("Current Balance   => "+balance);
        return  balance;
    }

}
