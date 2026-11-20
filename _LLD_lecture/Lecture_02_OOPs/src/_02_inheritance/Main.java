package _02_inheritance;

public class Main {
    
    public static void main(String[] args) {
        
        // UpiPayment upi = new UpiPayment();
        UpiPayment upi = new UpiPayment(24, "7466@upi");
        // CardPayment card = new  CardPayment(343, "4234 4234 5563 5376");
        // System.out.println("UPI" + upi.getRecipt());
        // System.out.println("Card" + card.getRecipt());
        upi.pay();
        // System.out.println("Card" + upi.pay(););
        // Payment.youCalledMe();
    }
}
