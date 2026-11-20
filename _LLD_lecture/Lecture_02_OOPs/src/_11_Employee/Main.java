package _11_Employee;

public class Main {
    
    public static void main(String[] args) {
       Employee emp1 = new Employee("Alice", 101, 50000);
       Employee emp2 = new Employee("Bob", 102, 60000);
       Employee emp3 = new Employee("Charlie", 103, 70000);

       emp1.displayDetails();
       emp2.displayDetails();
       emp3.displayDetails();

        Employee.getTotalEmployees();
        Employee.changeCompanyName("OpenAI");
        emp1.displayDetails();
        emp2.displayDetails();
        emp3.displayDetails();
        System.out.println("Annual Salary of " + emp1.employeeName + " : " + emp1.calculateAnnualSalary());
        System.out.println("Annual Salary of " + emp2.employeeName + " : " + emp2.calculateAnnualSalary());
        System.out.println("Annual Salary of " + emp3.employeeName + " : " + emp3.calculateAnnualSalary()); 
    }
}
