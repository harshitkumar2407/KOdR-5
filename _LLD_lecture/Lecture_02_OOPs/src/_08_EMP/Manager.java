package _08_EMP;

public class Manager extends Employee{
    

    Manager(String name,int EmployeeID,double salary){
        super(name, EmployeeID, salary);
    }
    
    Manager(){
        super("Unknown", 0, 0.0);
    }

    
    void  codinateMeating(){
        System.out.println("Manager is codinating a Meating");
    }

    void assignTask(){
        System.out.println("Manager is assignaing tasks");
    }


    @Override
    void work() {
        System.out.println("Manager is managing the team");
    }

}
