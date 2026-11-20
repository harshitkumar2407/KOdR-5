package _09_Payment;

public class UPIPayment extends Payment {
    

    UPIPayment(double amount){
        super(amount);
    }

    @Override 
    void processPayment(){
        System.out.println("Processing UPI payment");
        
    }

    double calculateFee(){
        return super.amount * 0.5;
    }
}
