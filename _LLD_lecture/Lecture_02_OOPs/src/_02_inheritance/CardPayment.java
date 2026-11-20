package _02_inheritance;

public class CardPayment extends Payment {
    private final  String CardNum;

    CardPayment(double amount,String CardNum){
        super(amount);
        // super();
        this.CardNum = CardNum;
    }
}

    


