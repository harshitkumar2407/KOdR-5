package _08_EMP;

public class Developer extends  Employee{
    

    Developer(String name,int EmployeeID,double salary){
        super(name, EmployeeID, salary);
    }

    Developer(){
        super("Unknown", 0, 0.0);
    }

    
    void writeCode(){
        System.out.println("Developer is writing code");
    }
    void fixBug(){
        System.out.println("Developer is fixing bug");
    }


    @Override
    void work() {
        System.out.println("Developer is writing code");
    }


}
