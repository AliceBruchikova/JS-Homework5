class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }   
}

class Student extends Person {
        constructor(name, age, gender, major) {
        super(name, age, gender);
        this.major = major;
    }
    getDetails() {
        console.log(this.name, this.age, this.gender, this.major);
    } 
}

const student1 = new Student('Alice', 28, 'female', 'developer');
const student2 = new Student('Vlad', 29, 'male', 'doctor');

student1.getDetails();
student2.getDetails();