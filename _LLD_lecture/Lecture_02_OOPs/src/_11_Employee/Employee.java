package _11_Employee;

public class Employee {

    static String companyName = "Tech Solutions";
    static int totalEmployees = 0;
    String employeeName;
    int employeeId;
    double salary;

    Employee(String employeeName, int employeeId, double salary){
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.salary = salary;
        
        Employee.totalEmployees++; 
    }


    void displayDetails(){
        System.out.println("Company name        : " + companyName);
        System.out.println("Employee name       : " + employeeName);
        System.out.println("Employee Id         : " + employeeId);
        System.out.println("Salary              : " + salary);
    }

    static void getTotalEmployees(){
        System.out.println("Total Employee      : " + totalEmployees);
    }
    static void changeCompanyName(String name){
        Employee.companyName = name;
    }
    double calculateAnnualSalary(){
        return  salary *12;
    }
}
