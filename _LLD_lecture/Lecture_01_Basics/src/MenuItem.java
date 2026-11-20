public class MenuItem {
    // this is a 
    private String name;
    private double price;

    public MenuItem(String name, double price) {
        if (price < 0) {
            System.out.println("Price must be positive. Setting price to 0.");
            throw new IllegalArgumentException("Price must be positive.");
        }
        this.name = name;
        this.price = price;
    }
    // accessor Modifier(public,private,protected) + return type + method name + parameters
    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }
}
