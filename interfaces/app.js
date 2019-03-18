//age is optional
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = 'Anna';
}
var person = {
    firstName: "Trang",
    age: 24
};
greet(person);
changeName(person);
greet(person);
