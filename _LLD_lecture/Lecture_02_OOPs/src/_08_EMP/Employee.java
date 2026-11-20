package _08_EMP;

public class Employee {
    String name;
    int EmployeeID;
    double salary;


    Employee(String name, int employeeId, double salary){
        this.name = name;
        this.EmployeeID = employeeId;
        this.salary = salary;
    }

    void  displayDetails(){
        System.out.println("Name        => " + name);
        System.out.println("Employee ID => " + EmployeeID);
        System.out.println("Salary      => " + salary);
    }

    double calculateAnnualSalary(){
        return  salary*12;
    }

    void work(){
        System.out.println("Employee is working");
    }

}
