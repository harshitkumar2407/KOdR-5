package _12_CMS;

public class Student {
    String name;
    String rollNumber;

    Student(String name, String rollNumber){
        this.name = name;
        this.rollNumber = rollNumber;
    }
    void displayStudent(){
        System.out.println("Name        "+ name);
        System.out.println("Roll Number "+rollNumber);
    }
    
}
