package _14_Object;

public class Student {
    String name;
    int rollNumber;

    Student(String name, int rollNumber) {
        this.name = name;
        this.rollNumber = rollNumber;
    }

    @Override
    public String toString() {
        return name + " - " + rollNumber;
    }

    // public Boolean equals(Student student1,Student student2){
    //     if (student1.rollNumber == student2.rollNumber) {
    //         return true;
    //     }
    //     return false;
    // }
    @Override
    public boolean equals(Object obj) {
    if (this == obj) return true;

    if (!(obj instanceof Student)) return false;

    Student student = (Student) obj;

    return this.rollNumber == student.rollNumber;
}
}
