package _01_encapsulation;

class MenuItem {
    private final String name;
    private final double price; //instance variables 
    // static int price2; //static variables or class variables. 

    MenuItem(String name, double price) { //parameters
        if (price <= 0) {
            throw new IllegalArgumentException("Price must be positive");
        }
        this.name = name;
        this.price = price;
    }

    String getName() { // accessmodifier (public, private, protected) returnType (String, int, MenuItem) NAME (parameters)
        return name;
    }

    double getPrice() {
        return price;
    }
}