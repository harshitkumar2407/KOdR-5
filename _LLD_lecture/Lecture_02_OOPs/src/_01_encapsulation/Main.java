package _01_encapsulation;

public class Main {
    public static void main(String[] args) {
        Order order = new Order();
        order.addItem(new MenuItem("Masala Dosa", 120));
        order.addItem(new MenuItem("Paneer Tikka", 250));

        System.out.println("Items: " + order.getItems().size());
        System.out.println("Total: Rs " + order.getTotalAmount());
    }
}