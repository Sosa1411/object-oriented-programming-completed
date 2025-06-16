/* Please read the instructions located in the exercises/2-oop-exercise-readme.md file and complete your code below */
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.grades = [];
  }
  addGrade(grade) {
    if (grade >= 0 && grade <= 100) {
      this.grades.push(grade);
    } else {
      console.log("Grades must be between 0 and 100");
    }
  }
  calculateAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    } else {
      return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    }
  }
  hasPassed(passingGrade) {
    return this.calculateAverageGrade() > passingGrade;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

class Course {
  constructor(title) {
    this.title = title;
    this.students = [];
  }
  enrollStudent(student) {
    this.students.push(student);
  }
  listStudents() {
    return console.log(this.students);
  }
  calculateAverage() {
    if (this.students.length === 0) {
      return 0;
    }
    const totalAverage = this.students.reduce(
      (sum, student) => sum + student.calculateAverageGrade(),
      0
    );
    return totalAverage / this.students.length;
  }
}

const student1 = new Student("Eric", 18);
const student2 = new Student("Jake", 17);
const student3 = new Student("Fatima", 20);
const student4 = new Student("Bill", 18);
const student5 = new Student("James", 21);

student1.addGrade(90);
student1.addGrade(85);
student1.addGrade(75);
student2.addGrade(56);
student3.addGrade(95);
student4.addGrade(86);
student5.addGrade(96);
