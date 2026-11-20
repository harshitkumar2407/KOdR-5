package _10_Notification;

public class Main {
    
    public static void main(String[] args) {
        // Notification n1 = new EmailNotification("abc@gmail.com", "Welcome!");

        // Notification n2 =new SMSNotification("9876543210", "Your OTP is 1234");
        // n1.send();
        // n2.send();

        // n1.displayNotification();
        // n2.displayNotification();

        Trackable t1 = new EmailNotification("abc@gmail.com", "Welcome!");
        Trackable t2 = new SMSNotification("9876543210", "Your OTP is 1234");

        t1.trackStatus();   
        t2.trackStatus();
}

}
