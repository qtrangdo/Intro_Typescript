interface NamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any;
  greet(lastName: string): void;
}
//age is optional
//any extra prop is allowed

function greet(person: NamedPerson) {
  console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson) {
  person.firstName = 'Anna';
}

const person = {
  firstName: "Trang",
  age: 24,
  hobbies: ['movies', 'singing'],
  greet(lastName: string) {
    console.log('Hi Ms. ' + this.firstName + ' ' + lastName)
  }
};

// greet(person);
// changeName(person);
// greet(person);

person.greet('Do');

class Person implements NamedPerson {
  firstName: string;
  greet(lastName: string) {
    console.log('Hi ' + this.firstName + ' ' + lastName)
  };
};

const myPerson = new Person();
myPerson.firstName = 'Harry';
myPerson.greet('Potter');