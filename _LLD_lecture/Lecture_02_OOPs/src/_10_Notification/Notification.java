package _10_Notification;

abstract class Notification {

    private String recipient;
    private String message;
    public  abstract void  send();

    Notification(String recipient, String message){
        this.recipient = recipient;
        this.message = message;
    }


    void displayNotification(){
        System.out.println("Recipient: " + recipient);
        System.out.println("Message: " + message);
    }

}
