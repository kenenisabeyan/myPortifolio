let name = "Kenenisa";
const = "Edot";
console.log(name);
console.log(platform);

let age = 22;
age = 23; //allowed to change the value of age since it's declared with let
console.log(age);

const age = 30; //not allowed to change the value of age since it's declared with const
// age = 31; //this will throw an error
console.log(age);


//practice arrow function
const greet = (name) => {
    return `Hello, ${name}!`;
}
console.log(greet("Kenenisa"));

const add = (a, b) => {
    return a + b;
} 
console.log(add(5, 10));

const square = (x) => {
    return x * x;
}     
console.log(square(4));


// practice template strings
const name = "Kenenisa";
console.log(`Hello, ${name}! Welcome to ${platform}.`);


// practice ES6 Classes
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }   greet() {console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }   

}

const student1 = new Student("Kenenisa", 22);
student1.greet();