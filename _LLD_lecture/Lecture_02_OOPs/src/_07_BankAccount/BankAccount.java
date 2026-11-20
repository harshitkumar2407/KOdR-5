package _07_BankAccount;

public class BankAccount {
    private  String AccountHolder;
    private  String AccountNumber;
    private  double balance;


    BankAccount(String accountHolder,String accountNumber,double balance){  
        if (balance<0) {
            System.out.println("Balance must be positive");
            return ;
        }
        this.AccountHolder = accountHolder;
        this.AccountNumber = accountNumber;
        this.balance = balance;
    }
    String getAccountHolder(){
        return  this.AccountHolder;
    }
    String getAccountNumber(){
        return  this.AccountNumber;
    }
    void deposit(double amount){
        if (amount <= 0) {
            System.out.println("Amount be positive and non-zero");
        }
        this.balance += amount;
    }
    void withdraw(double amount){
        if (amount <= 0) {
            System.out.println("Amount be positive and non-zero");
        }
        if (amount > balance) {
            System.out.println("You don't have enouth balance");
        }
        this.balance -= amount;
    }
    void setAccountHolder(String name){
        if (name.trim().length() == 0) {
            System.out.println("Please input proper name");
        }
        this.AccountHolder = name;
    }

}
