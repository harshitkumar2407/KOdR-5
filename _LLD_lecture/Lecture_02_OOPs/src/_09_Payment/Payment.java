package _09_Payment;

public class Payment {
    double amount;

    Payment(double amount){
        this.amount = amount;
    }

    void  processPayment(){
        System.out.println("Processing generic payment ");
    }

    double  calculateFee(){
        return 0.0;
    }
    void refund(double amount){
        System.out.println("Amount " + amount);
    }

    void refund(double amount, String reason){
        System.out.println("Refund Amount " + amount);
        System.out.println("Reason " + reason) ;
    }

}
