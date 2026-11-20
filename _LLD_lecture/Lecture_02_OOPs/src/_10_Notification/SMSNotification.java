package _10_Notification;

// public class SMSNotification implements Notificaction ,Trackable
public class SMSNotification extends Notification implements Trackable
{
    
    public  SMSNotification(String recipient, String message){
        super(recipient, message);
    }

    @Override 
    void send(){
        System.out.println("Sending SMS to: "+ super.recipient);
    }
    public void  trackStatus(){
        // System.out.println("Email delivery status: Sent");
            System.out.println("SMS delivery status: Delivered");
    }

}

