// use this to copy code snippets or use your browser's console
function greet() {
    console.log(`my name is ${this.name}, hi!`);
}

greet(); // my name is , hi!

let person = {
    name: 'Bob',
    greet: greet
};

person.greet(); // my name is Bob, hi!

let sally = { name: 'Sally' };
function greet2(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}
greet2.call(sally, 'Terry', 'George');
greet2.apply(sally, ['Terry', 'George']);


 
function greet3(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}
 
let newGreet = greet3.bind(sally); // newGreet is context-bound to sally
 
newGreet('Bob');
// Hi Bob, my name is Sally!
 
greet('Bob');
// Hi Bob, my name is !