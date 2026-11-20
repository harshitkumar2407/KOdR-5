package _08_EMP;

public class Main {
    public static void main(String[] args) {
        // Developer dev = new Developer("Rohan", 101, 50000);

        // Manager manager = new Manager("Raj", 102, 80000);

        // dev.displayDetails();
        // manager.displayDetails();

        // dev.work();
        // manager.work();

        // dev.writeCode();
        // dev.fixBug();

        // manager.codinateMeating();
        // manager.assignTask();

        // System.out.println(dev.calculateAnnualSalary());

        // System.out.println(manager.calculateAnnualSalary());
        Employee e1 = new Developer();
        Employee e2 = new Manager();
            
        e1.work();
        e2.work();

    }
}
