package _14_Object;

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Rohan", 2);
        Student s2 = new Student("Raj", 2);
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s1 == s2);
        System.out.println(s1.equals(s2));
    }
}
