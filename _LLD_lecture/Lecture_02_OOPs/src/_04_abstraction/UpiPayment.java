package _04_abstraction;

public class UpiPayment extends Payment {
    private final  String upid;

    UpiPayment(double amount,String upid){
        super(amount);
        super.pay();
        // super();
        this.upid = upid;
    }

    @Override 
    void pay(){
        System.out.println("UPI Pay by "+upid+" "+amount);
    }

    










    // system.outprintln("you are in UPi");
    // static {
    //     System.out.println("you are in UPI");
    // }
}
