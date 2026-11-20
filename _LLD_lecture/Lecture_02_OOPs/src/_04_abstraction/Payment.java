package _04_abstraction;

abstract class Payment {
    protected double amount;


    Payment(double amount){
        this.amount = amount;
    }
    Payment(){
        this.amount = 0.0;
    }
    
    String getRecipt(){
        return  "Receipt "+amount+" is paid";
    }
    

        void pay(){
            System.out.println("Pay "+amount);
        }
    // static {
    //     System.out.println("you are in Payment");
    // }
    // static void youCalledMe(){
    //     System.out.println("you called me");
    // }
}
