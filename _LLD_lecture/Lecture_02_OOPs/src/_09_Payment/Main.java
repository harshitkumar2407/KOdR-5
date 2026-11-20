package _09_Payment;

public class Main {
    public static void main(String[] args) {
        Payment payment = new Payment(1000);
        payment.processPayment();
        System.out.println("Fee " + payment.calculateFee());
        payment.refund(100);
        payment.refund(100, "Product not delivered");

        CreditCardPayment creditCardPayment = new CreditCardPayment(2000);
        creditCardPayment.processPayment();
        System.out.println("Fee " + creditCardPayment.calculateFee());
        creditCardPayment.refund(200);
        creditCardPayment.refund(200, "Product not delivered");

        UPIPayment upiPayment = new UPIPayment(3000);
        upiPayment.processPayment();
        System.out.println("Fee " + upiPayment.calculateFee());
        upiPayment.refund(300);
        upiPayment.refund(300, "Product not delivered");
    }
}
