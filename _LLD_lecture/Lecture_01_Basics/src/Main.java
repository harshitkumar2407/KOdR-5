public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to Low-Level Design (LLD)!");


        MenuItem item1 = new MenuItem("Burger", 5.99);
        MenuItem item2 = new MenuItem("Pizza", 8.99);

        System.out.println("Menu Item 1: " + item1.getName() + ", Price: $" + item1.getPrice());
        System.out.println("Menu Item 2: " + item2.getName() + ", Price: $" + item2.getPrice());

    }
}
