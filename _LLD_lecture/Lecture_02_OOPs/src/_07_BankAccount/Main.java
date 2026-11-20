package _07_BankAccount;

public class Main {
    public static void main(String[] args) {
        BankAccount user1 = new BankAccount("Rohan", "ACC101", 5000);

        BankAccount user2 = new BankAccount("Raj", "ACC102", 3000);

        System.out.println(user1.getAccountHolder()+"    "+user1.getAccountNumber());
        System.out.println(user2.getAccountHolder()+"    "+user2.getAccountNumber());

        user1.deposit(2000);
        user2.withdraw(1000);
        user2.withdraw(10000);
        user1.setAccountHolder("Rohan Kumar");  
        // System.out.println(user1.balance);
    

    }
}
