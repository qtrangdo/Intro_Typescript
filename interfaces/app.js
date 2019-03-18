//age is optional
//any extra prop is allowed
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = 'Anna';
}
var person = {
    firstName: "Trang",
    age: 24,
    hobbies: ['movies', 'singing'],
    greet: function (lastName) {
        console.log('Hi Ms. ' + this.firstName + ' ' + lastName);
    }
};
// greet(person);
// changeName(person);
// greet(person);
person.greet('Do');
//  ****** CLASS ... IMPLEMENTS
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log('Hi ' + this.firstName + ' ' + lastName);
    };
    ;
    return Person;
}());
;
var myPerson = new Person();
myPerson.firstName = 'Harry';
myPerson.greet('Potter');
var myDoubleFunc;
myDoubleFunc = function (value1, value22) {
    return (value1 + value22) * 2;
};
console.log(myDoubleFunc(10, 10));
var oldPerson = {
    age: 26,
    firstName: 'Moe',
    greet: function (lastName) {
        console.log('Hello');
    }
};
console.log(oldPerson);
