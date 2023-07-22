class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    getDetails() {
      console.log(this.name, this.salary);
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }

    getDetails() {
      console.log(this.name, this.salary, this.department);
    }
  }
  
  class Developer extends Employee {
    constructor(name, salary, programmingLanguage) {
      super(name, salary);
      this.programmingLanguage = programmingLanguage;
    }
  
    getDetails() {
      console.log(this.name, this.salary, this.programmingLanguage);
    }
  }
  
  const manager = new Manager('Alice', 1000, 'manager');
  const developer = new Developer('Vlad', 2000, 'developer');
  
  manager.getDetails();
  developer.getDetails();