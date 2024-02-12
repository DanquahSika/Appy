// alert('We are Beta!!!')
console.log('We are Beta!!!');

var firstName = 'Michael';
var age = 9;

let lastName = 'Hammond'
const boilingWaterTemperature = 100;

var firstName = 'Jordan';
// let lastName  = 'Gerald'; - Error: Let and Const can not be redeclared!
// let boilingWaterTemperature = 120;

let wannaDie = true;

// object datatype - this is how its written
let bottle = {
    color: 'blue',
    volume: 500,
    canStoreWater: true,
    storeWater: null
}

// var, let and const have different scopes:
// --------------------------------+

// console.log(firstName); // Accessible from anywhere in the script (global scope)
// console.log(age);
// console.log(lastName);
// console.log(boilingWaterTemperature);

console.log(firstName, age, lastName, boilingWaterTemperature);

// console.log(`${lastname}, ${age}`); // Accessible only within this block



// Conditional Statement (If/Else)
// if(Condition to be met){}

if(age == 18){
    console.log('You are eligible to stream');
}
else{
    console.log("Sorry you aren't old enough");
    }

// Loops : when you have something that needs to be done multiple times use loops insted of repeating code

// (For Loop): for(initialization; condition; increment/decrement statement){}. The loop below ends at 7  
// because it will keep running until the "condition" becomes false
for(let i = 1; i < 8; i++){
    console.log('I am at index', i);
}
// The above is telling to start at 1 until it is less than 8 that is 7
// ++ or -- increment and decrement operator

// the loop below stops at 8 but goes up by one each time but once the loop becomes false  it stops executing
// So, it starts at 1 and goes till 8 and then stops as it becomes false. The exclamation sign means 'not' so !(i<10) is not true anymore after reaching 9.
for(let i = 1; i != 8; i ++){
    console.log('The value if i is', i)
}

// if the i is less than or equal to 8, the loop stops at 9
for(let i = 1; i <= 8; i ++){
    console.log('The value if i is', i)
}

// while loop(condition to keep looping){}


// Functions: A function is a piece of code that can be reused again and again. 
// It has name , parameters(optional), body and return value(optional).
// function name(params) { block of code}

// Functions - Defining
function isEligible(){
    if(age == 18){
        console.log('You are eligible to stream');
    }
    else{
        console.log("Sorry you aren't old enough");
        }
}

// Function - Invoke
// to invoke a function  just call its name followed by parenthesis with any arguments passed in them
// isEligible(); // calling the function without passing any argument
isEligible();

// Functions - Defining
function isEligible(){
    if(age == 18){
        return('You are eligible to stream');
    }
    else{
       return("Sorry you aren't old enough");
        }
}

// Function - Invoke
console.log(isEligible()); // calling the function and printing the returned value
alert(isEligible())  ; // displaying the alert box with the returned value
document.body.innerHTML = isEligible(); //+ '<br>'+ 'Another line'; // adding the returned value to HTML page 
















// Recursive functions : A function calls itself during execution