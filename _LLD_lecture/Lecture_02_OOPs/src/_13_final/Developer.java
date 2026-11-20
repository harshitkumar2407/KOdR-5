package _13_final;

public class Developer extends Employee {
    String programmingLanguage;
    
    Developer(String name,int employeeID,String programmingLanguage){
        super(name, employeeID);
        this.programmingLanguage = programmingLanguage;
    }

    @Override 
    void displayDetails(){
        System.out.println("Name        :" + name);
        System.out.println("Language    :" + programmingLanguage);
        System.out.println("Employee    :" + employeeID);
    }
    // @Override 
// final void showCompanyPolicy(){
//         System.out.println("this is importent becaouse these are company policy");
// }
}
