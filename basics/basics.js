document.write('Hello! ');
console.log("What's up?");

//ESCAPE SEQUENCE
/*  \n new line
    \r carriage return
    \t tab
    \' single quote
    \" double quote
*/

console.log('Hello World!\nJavaScript is awesome.');

//VARIABLES
/*A variable is a container for holding data
A variable is a name in a program, referring to a 
location in memory where some sort of data is stored.*/

var x = 10;
console.log(x + 10); //20

x = 60;
console.log(x) //60

var greeting = 'Hello World!'
console.log(greeting) //Hello World!


//FUNCTION
/*A function represents a block of code that gets executed 
when the function is called — or better to say, 
when the function is invoked.
To call a function, just like to call a method 
(since a method is also a function), we write a 
pair of parentheses (()) after the function's name.*/


//DIALOGUE BOXES
//1.ALERT DIALOGUE
//alert(msg);
alert('Lütfen giriş yapınız');
alert(['dikkat']);
alert('Hello\nWorld!');

//2.CONFIRMATION DIALOGUE
/*confirm([msg]);
For the function confirm(), it returns true if the user presses OK,
or else false. This return value is essentially how we're able to
determine which button the user pressed.*/
confirm('This is a confirmation box');
var proceed = confirm('Do you want to proceed');

console.log(proceed) //true

//PROMPT DIALOGUE
/*
prompt(msg,placeholder);
*/ 
var age = prompt('What is your age?');
document.write('You are ' + age + ' years old.');



//CONVERSION TO A NUMBER
console.log(Number('10'))       //10
console.log(Number('20a'))      //NaN (Not a Number)
console.log(Number('Hello'))    //NaN

//TASK1
/*Write a piece of code that defines a variable x holding 
the string '-50.6' and then logs the numeric equivalent 
of the string to the console.*/

var x = '50.6';
console.log(Number(x));

//ADDITION CALCULATOR
//my answer
let a = prompt('a = ?')
let b = prompt('b = ?')

document.write('The sum is:', Number(a) + Number(b));

/*var a = prompt('a = ?');
var b = prompt('b = ?');

a = Number(a);
b = Number(b);

var sum = a + b;

document.write('The sum is: ' + sum);*/