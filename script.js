// complete this js code
// function Person(name, age) {}

// function Employee(name, age, jobTitle) {}
try{
	
class Person{
	constructor(name, age){
		this.name=name;
		this.age = age;
	}
	greet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
	}
}

class Employee extends Person{
	constructor(name, age, jobTitle){
		super(name, age);
		this.jobTitle = jobTitle;
	}
	jobGreet{
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
	}
}
}catch()

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
