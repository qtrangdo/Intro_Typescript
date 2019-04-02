function logged(contructorFn: Function) {
  console.log(contructorFn);
}

@logged
class Person {
  constructor() {
    console.log("Hi!");
  }
}

//Factory 
function logging(value: boolean) {
  return value ? logged : null;
}

@logging(true)
class Car {

}

//Advanced 
function printable(contructorFn: Function) {
  contructorFn.prototype.print = function() {
    console.log(this);
  }
}

@logging(true)
@printable
class Plant {
  name = "Green Plant"
}
const plant = new Plant();
(<any>plant).print();


// Method Decorator
// Property Decorator
function editable(value: boolean) {
  return function(target:any, propName: string, descriptor: PropertyDescriptor) {
      descriptor.writable = value;
  }
}

function overwritable(value: boolean) {
  return function(target: any, propName: string): any {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor
  }
}

class Project {
  @overwritable(false)
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }
  @editable(false)
  calBudget() {
    console.log(1000);
  }
}

const project = new Project('super Project');
project.calBudget();
project.calBudget = function() {
  console.log(2000);
}
project.calBudget();
console.log(project);

// Parameter Decorators
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log('Target: ', target);
  console.log('methodName: ', methodName);
  console.log('paramIndex: ', paramIndex);
}

class Course {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean): void {
    if (printAll) {
      console.log(10000);
    } else {
      console.log(2000)
    }
  }
}

const course = new Course('Super Course');

course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);