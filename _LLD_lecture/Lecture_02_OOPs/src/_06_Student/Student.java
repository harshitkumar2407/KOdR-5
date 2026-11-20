package _06_Student;

public class Student {
    String name;
    int rollNumber;
    int age;
    String course;
    double fees;

    // Student(){
    //     this.name = "Unknown";
    //     this.rollNumber = 0;
    //     this.age = 18;
    //     this.course = "Not Assigned";
    //     this.fees = 0.0;
    // }
    Student(){
        this("Unknown", 0, 18, "Not Assigned", 0.0);
    }

    Student(String name){
        // this.name = name;
        // this.rollNumber = 0;
        // this.age = 18;
        // this.course = "Not Assigned";
        // this.fees = 0.0;
        this(name, 0, 18, "Not Assighed", 0.0);
    }
    Student(String name,int rollNumber, int age){
        // this.name = name;
        // this.rollNumber = rollNumber;
        // this.age = age;
        // this.course = "BCA";
        // this.fees = 25000.0;
        this(name, rollNumber, age, "BCA", 25000.0);
    }
    Student(String name,int rollNumber, int age,String course, double fees){
        this.name = name;
        this.rollNumber = rollNumber;
        this.age = age;
        this.course = course;
        this.fees = fees;
    }

    void displayStudentDetails(){
        System.out.println("Name        => "  +  name);
        System.out.println("Roll num    => "  +   rollNumber);
        System.out.println("Age         => "  +  age);
        System.out.println("Course.     => "  +  course);
        System.out.println("Fees.       => "  +  fees);
    }

    void updateCourse(String newCourse){
        this.course = newCourse;
        System.out.println("New Couse   => "  +  course);
    }

    void updateFees(double newFees){
        if (newFees < 0) {
            System.out.println("Fee must be positive");
            return ;
        }
        this.fees = newFees;
        System.out.println("Your new fee will be     => " + fees);
    }
    double getFees(){
        return  this.fees;
    }


}
