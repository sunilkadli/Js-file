// alert("Hi Gudmorning All") // global code
// function greetAll(){
//     alert("Hi Gudmorning All"); // local code  
// }

// greetAll();


// declare a function :

// calling function :

// Behavior of javascript function:
//? without parameters and without return keyword
//? without parameters and with return keyword
//? with parameters and without return keyword
//? with parameters and with return keyword


//? without parameters and without return keyword

// function addTwoNums(){
//     console.log(10 + 10);
// }
// addTwoNums();

//? without parameters and with return keyword

// function addTwoNums(){
    // console.log(10 + 10);
    // return 10+10;

    // let a= 1;
    // let b = 2;
    // console.log(a+b);  unreachable code , return statement should be the last statement written inside the function , statements written after the return staement are not be executed by a function
// }

// alert( addTwoNums() ); // 20

// console.log( addTwoNums() ); //20
// document.write( addTwoNums() ); // 20
// to print returned results in the console , we can call the function inside the printing statement either console.log() or document.write()

//? with parameters and without return keyword:
// when a function is having parameters we need to use them for any operation inside the function.
// and we need provide arguments for the paramters in order to perform the operations
// In javascript a function can accept any number of arguments , b ut we need to pass the arguements with respect to the number of parameters provided in a function
// the extra given arguments will be neglected or ignored

// function addTwoNums(a , b){
//     console.log(a + b);
// }
// addTwoNums(1 , 2);
// addTwoNums(11 , 12);
// addTwoNums(111 , 121 , 10); // 232 , 10 is ignored

// ?with parameter and with return keyword:

// function addTwoNums(a, b){
//     return a + b;
// }
// console.log(addTwoNums(1, 2));
// alert(addTwoNums(10, 10));



//! types of function

//? 1.General function
// function functionName(){
    // statements...
// }


// function getDate(){
//     let date = new Date();
//     alert(date.toLocaleDateString());
// }
// getDate();


//? 2.Anonymous function :without name


// let getTime  =  function (){
//         let date = new Date();
//         alert(date.toLocaleTimeString())
//     }
// getTime();

// ? Arrow function:

// let arr = () => {
//     let x = "Hi Iam Arrow"
//     console.log(x);
// }
// arr();


// let greet = () => {
//     return "Hello";
// }
// alert (greet());

// let greet = () => "Hello"
// alert(greet());


// ? When a arrow function is accepting one parameter:
// * paranthesis is not mandatory

// let greet = a => {
//     var a = "Hello"
//     return a
// }
// alert(greet());

// ? When a arrow function is accepting more than one parameters:
// //* parenthesis is mandatory
// let product = (x, y) => {
//     return x*y ;
// }
// alert(product(2, 5));

// ? when a arrow function is returning a statement: return keyword and curly brackets are not mandatory

// let product = (x , y) => x*y

// alert(product(2 , 5));

//! callback function:
 
// function ret2(){
//     return 2
// }

let ret2 = () => 2

// function sum(a , b){
//     console.log(a + b);
// }
let sum = (a, b) => console.log(a + b);
sum(2 , ret2())


//using callback function we can perform more than one task at a time 

// function a(){
//     return "sunil"
// }
// function wish(a , callback){
//     alert(a + callback)
// }
// wish("Gud Mrng " , a());


 