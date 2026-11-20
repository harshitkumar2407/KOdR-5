package _06_Student;

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();

        Student s2 = new Student("Rohan");

        Student s3 = new Student("Raj", 101, 21);

        Student s4 = new Student(
            "Aman", 102, 22, "MCA", 45000.0
        );

    s1.displayStudentDetails();
    s2.displayStudentDetails();
    s3.displayStudentDetails();
    s4.displayStudentDetails();
    
    s2.updateCourse("BCA");
    s3.updateFees(30000);
    s4.updateFees(-5000);

    System.out.println(s1.getFees());
    System.out.println(s2.getFees());
    System.out.println(s3.getFees());
    System.out.println(s4.getFees());

    }
}

