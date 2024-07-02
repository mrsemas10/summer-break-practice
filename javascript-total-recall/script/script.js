// JavaScript Total Recall

// -----I. Variables & Datatypes-------

// A. Q + A
/*
1. How do we assign a value to a variable? 
    A. With the assignment operator (x=10)
2. How do we change the value of a variable? 
    A. Using an increment operator (x=x+1)
3. How do we assign an existing variable to a new variable?
    A. Using another assignment operator (let x=y; let y=x-y )
4. Remind me, what are declare, assign, and define?
    A. declare: creating a variable; assign: give value to the variable; define: assign a value to the variable
5. What is pseudocoding and why should you do it?
    A. a way to express logic of a program w/o constraints of a specific language's syntax. It helps the programmer think through a
    problem and devise a plan to solve it. 
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    A. 50%
*/

// B. Strings

let firstVariable = "Hello World";
firstVariable = 8;
let secondVariable = firstVariable;
secondVariable = "Any String";
console.log(secondVariable);
// What is the value of firstVariable? 8

let yourName = "Erica";
console.log("hello, my name is " + yourName);

// C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name'=== 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false)
console.log(e == 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// D. The farm

let animal = 'sheep';

if (animal == "cow") {
    console.log("mooooo")
} else {
    console.log('hey you are not a cow!');
}

// E. Driver's Ed

let age = 37;
 if (age >= 16) {
    console.log("here are the keys!")
 } else if (age < 16) {
    console.log("sorry you are too young")
 }

// -------II. Loops-------

// A. The basics

console.log("0-10, inclusive")
for (let i=0; i<=10; i++) {
    console.log(i);
}

console.log("10-400, inclusive")
for (let i=10; i<=400; i++) {
    // console.log(i);
}

console.log("every 3rd number up 12-4000")
for (let i=12; i<=4000; i+=3) {
    // console.log(i);
}

// B. Get even
console.log("1-100")
for (let i=1; i<=100; i++) {
    // console.log(i);
}

console.log("even")
for (let i=1; i<=100; i++) {
    if (i%2 === 0) {
        // console.log(i + " is an even number");
    }
}

// C. Give me Five
console.log("high five")
for (let i=0; i<=100; i++) {
    if (i%3 === 0 && i%5 === 0) {
        // console.log(i + " High five! Three is a crowd");
    }
    else if (i%5 === 0) {
        // console.log("I found a " + i + ". High five!");
    }
    else if (i%3 === 0) {
        // console.log("I found a " + i + ". Three is a crowd");
    }
    else {
        // console.log(i);
    }
}

// D. Savings account




// -------III. Arrays and Control Flow-------

// A. Talk about it:

// What are the things in an array called?
    // A. objects
// Do Arrays guarantee those things will be in order?
    // A. yes
// What real-life thing could you model with an array?
    // names of children in birth order let kids = [Cristyn, Erica, Nesey, Jazmyn];

// B. Easy Does It
const quotes = ['life is like a box of chocoloates', 'may the force be with you', 'hakana matata']

//C. Accessing elements
const randomThings = [1, 10, "Hello", true]

console.log('How do you access the 1st element in the array?')
// console.log(randomThings[0]);

console.log('Change the value of "Hello" to "World"')
randomThings[2]="World";
// console.log(randomThings[2]);


console.log('Check the value of the array to make sure it updated the array.')
// console.log(randomThings);

// D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

console.log('What would you write to access the 3rd element of the array?')
// console.log(ourClass[2]);


console.log('Change the value of "Github" to "Octocat"')
ourClass[4]="Octocat";
// console.log(ourClass);

console.log('Add a new element, "Cloud City" to the array')
ourClass[5]="Cloud City";
// console.log(ourClass);

// E. Mix It Up
const myArray = [5, 10, 500, 20];

console.log('Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.')
myArray.push('Aegon', 'Erica');
console.log(myArray);


console.log('Remove the 5 from the beginning of the array.');
myArray.shift();
console.log(myArray);

console.log('Add the string "Bob Marley"to the beginning of the array.')
myArray.unshift('Bob Marley');
console.log(myArray);

console.log('Remove the string of your choice from the end of the array.');
myArray.pop();
console.log(myArray);

console.log('Reverse this array using Array.prototype.reverse().')
Array.prototype.reverse(myArray);
console.log(myArray);

// Did you mutate the array? 
// What does mutate mean? 
// Did the .reverse() method return anything?





