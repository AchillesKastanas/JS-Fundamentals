// 1. Design a class for employee which takes id and name in during construction
// of object and has a salary property
// 2. Design a class for manager which is emplyee and can have department property
class Employee {
  constructor( id, name ) {
    if( !id || !name ) throw new Error( 'Employee id and name are mandatory' );
    this.id = id;
    this.name = name;
  };

  setSalary( salary ) {
    this.salary = salary;
  };

  getSalary() {
    return this.salary;
  };

  getId() {
    return this.id;
  };

  getName() {
    return this.name;
  };
}

class Manager extends Employee {
  setDepartment( department ) {
    this.department = department;
  };

  getDepartment() {
    return this.department;
  };
}

const employee = new Employee( 1, 'Ody' );
console.log( employee );