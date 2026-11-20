public class Hello {

    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
    
    public static int square(int num) {
        System.out.println("the square is " + num*num);
        return num * num;
    }

    public static void main(String[] args) {
        System.out.println("Hello, World!");

        // function to add two numbers
        int result = square(5);
        System.out.println("The square is: " + result);

        greet("John");
    }
}
