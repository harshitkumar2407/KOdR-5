package _05_BankAccount;

public class Main {
    public static void main(String[] args) {

        BankAccount user1 = new BankAccount();
        user1.AccountHolder = "Rohan";
        user1.AccountNumber = "2134_7899_4645_5453";
        user1.balance = 5000.0;
        
        BankAccount user2 = new BankAccount();
        user2.AccountHolder = "Raj";
        user2.AccountNumber = "2134_7899_4645_5000";
        user2.balance = 3453.34;

        user1.displayAccountDetails();
        user2.displayAccountDetails();

        user1.diposit(2000.0);
        user1.withdraw(1000.0);

        user2.withdraw(12000);
        user1.withdraw(-1200);

        System.out.println(user1.getBalance());

    }
}
