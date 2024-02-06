console.log("Hello, world!")

/*
*This is a comment
*spanning multple lines
*/

// Data Types, Numbers and floats;
// console.log (5, 1000, 1.5, -9.8);

//Strings
// console.log("I think mayo is cool");
// console.log('This is also a string');
// console.log();

//Boolean
// console.log('This is True', true);

// Null
// console.log(null);

// undefines
// console.log(undefined);

// Object (technically in Javascript everything is an object)
// {}

// Variable declaration
// var firstname = "Justin";
// let lastname = "Garcia";
// const location = 'New york';

// console.log(firstname);

// The LET statement
// let fruit = 'apple';
// console.log(fruit);

// We will get an error below for trying to redeclare
// let fruit = "banana";

//Re-assigning value. Fruit will have a value of apple until it gets to line 43
// fruit = "strawberry";
// console.log(fruit);

// Below is a block scope. It belongs in its own tiny bubble
// {
// const className = "2024-Rtt-03"

// }
// The following won't be able to define classname because while the code above is in a block scope its in its own little world that other code cannot reference
// console.log(className)

// CONT statemenet
// const PI = 3.141592653589793;
// PI = 3.14; // This will give an error.

// Benefits of Let and const
// var counter = 1;
// Do something with this counter.

// Then, some many lines later...
// function processData() {
//    var counter = 1;
//    Do something with this other counter.
// }

// Which counter are we referencing here?
// counter++;

// LITERALS
// console.log(true);
// console.log("Hello World!");
// console.log(42);

// TYPEOF
// let myVar = "Hello World"

// console.log(typeof 42);
// console.log(typeof myVar);
// console.log(typeof ("Grapes"));

// data type coercion
// let newNumber = 9;
// newNumber = newNumber + '1';

// console.log (typeof newNumber)

// Comparison operator
// console.log(3>4);
// console.log(4<10);

// console.log(78 >= 90);
// console.log(78 >=78);

// console.log(!true) //The ! makes it the opposite so it will come up as false instead of true

// let isequal = 3 == 3;
// console.log(isequal)


// String Xoncatenation

// console.log("hello" + "world") //Will output hello world

//String Access
// const fullname = 'Sebrun Sabri';

// console.log(fullname[0])


//Long literal string

// const frost =
// 	"Nature's first green is gold, " +
// 	"Her hardest hue to hold. " +
// 	"Her early leaf's a flower; " +
// 	"But only so an hour. " +
// 	"Then leaf subsides to leaf. " +
// 	"So Eden sank to grief, " +
// 	"So dawn goes down to day. " +
// 	"Nothing gold can stay. ";

// console.log(frost);

// 
console.log("HELLO\nGoodbye") // n will appear in a new line
console.log("HELLO\ragain") // r everything before will not appear
console.log('Hello\vgoodbye')
