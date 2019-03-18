interface NamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any;
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
  age: 24
};

greet(person);
changeName(person);
greet(person);