package _10_Notification;


// public class EmailNotification implements  Notification,Trackable
public class EmailNotification extends Notification implements Trackable{
    
    public EmailNotification(String recipient, String message) {
    super(recipient, message);
}


    @Override 
    void send(){
        System.out.println("Sending E-mail to" + super.recipient );
    }

    public void  trackStatus(){
        // System.out.println("SMS delivery status: Delivere");
         System.out.println("Email delivery status: Sent");
    }


}
