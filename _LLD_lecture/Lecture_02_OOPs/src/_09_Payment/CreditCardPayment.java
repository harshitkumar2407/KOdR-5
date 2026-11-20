package _09_Payment;

public class CreditCardPayment extends Payment{

    CreditCardPayment(double amount) {
        super(amount);
    }

    @Override 
    void  processPayment(){
        System.out.println("Processing credit card payment");
        
    }
    
    double calculateFee(){
        return super.amount * 0.02;
    }

}


