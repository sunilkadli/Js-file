//! alert(): it is a popup method comes under window object ,which display a alert popup on webpage
// !alert popup will have only ok button
// confirm()
// prompt()

// alert("Hi gudmorning"); //display msgs

// function msg(){
//     alert("Message ok")
// }

// !2.confirm():it is a popup method comes under window object ,which displays a confirmation popup on the webpage
// !it is used to get the confirmation from the user
// ! it has two buttons ok and cancel, if user clicks on k it returns true, if user clicks on cancel it returns false

// function cnfm(){
//     confirm("Accept Cookies?")
// }

// let bool = confirm("Accept Cookies?") // to get the confirmation from the user
// console.log(bool);

// let x = confirm("accept cookies");
// console.log(x);

// if(x){
//     alert("user accepted cookies")
// }else{
//     alert("user is not accepted cookies")
// }

// if(bool == true){
//     body.style.backgroundColor = "green"
// }else{
//     alert("user is rejecting to accept cookies")
// }

// !3.promt():it is a popup method comes under window object ,which displays a popup to accepts user inputs on the webpage.
// !it has two button Ok and cancel along with one input field, it returns the field value when user clicks on k and it returns null when user clicks on cancel

// let userInput = prompt("Enter your name" , "full name please...")
// console.log(userInput);

// let pt = prompt("Enter your FullName") // to get the user inputs
// console.log(pt);

// alert("Hi "+pt+" good morning")


// let num1 = parseInt(prompt("enter a first number"));
// let num2 = parseInt(prompt("enter a second number"));

// function add(a , b){
//     return a+b
// }
// console.log(add(num1 , num2));



// let marks = prompt("Enter your marks");

// let result = (marks >=300) ? "pass" : "failed";
// alert(result);

var x = 10;
var y = ++x + x++ - ++x - x++;
console.log(x);
console.log(y);