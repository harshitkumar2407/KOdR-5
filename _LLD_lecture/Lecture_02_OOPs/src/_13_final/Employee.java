package _13_final;

public class Employee {
    String name;
    final int employeeID ;
    
    Employee(String name,int employeeID){
        this.employeeID = employeeID;
        this.name = name;
    }

    final void showCompanyPolicy(){
        System.out.println("this is importent becaouse these are company policy");
    }
    void displayDetails(){
        System.out.println("Name    :" + name);
        System.out.println("Employee:" + employeeID);
    }
}
