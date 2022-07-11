//! if 

// let num1 = 10;
// let num2 = 20;
// if (num1 == num2){
//     alert(num1 + "is equals to" + num2)
// }

//! if else

// if (num1 == num2){
//     alert(num1 + "is equals to" + num2)
// }
// else{
//     alert(num1 + "is not equals to" + num2)
// }

//! nested if

// let number = 100;
// if(number > 0){
//     alert(number + "is positive");
//     if(number % 2 == 0){
//         alert(number + "is even")
//     }
//     else{
//         alert(number + "is odd")
//     }
// }
// else{
//     alert(number + "is not positive")
// } 

// ! else if ladder

// let color = "red" // black,blue,orange,violet.
// if (color ==  "black"){
//     console.log("the color is black");
// }
// else if (color == "blue"){
//     console.log("the color is blue");
// }
// else if (color == "red"){
//     console.log("the color is red");
// }
// else if (color == "orange"){
//     console.log("the color is orange");
// }
// else{
//     console.log("no matching color");
// }


// // w a p to the given number is positive or negetive

// let i = 10;
// if(i>0){
//     console.log(i + "is positive");
// }
// else if(i==0){
//     console.log(i + "is zero");
// }
// else{
//     console.log(i + "is negative");
// }

// // ! switch

// switch(color){
//     case "black" : console.log("color is black");
//     break;
//     case "red" : console.log("color is red");
//     break;
//     case "orange" : console.log("color is orange");
//     break;
//     case "violet" : console.log("color is violet");
//     break;
//     default:console.log("no matching color");
//     break;
// }

// !looping in javascript

// for
// while
// dowhile

// syntax
// for(initialization; condition; increment/decrement)

//! w a p to print number from 1 to 10

// for(let i=1; i<=10; i++){
//     console.log(i)
// }

//! w a p to print number from 10 to 1

// for(let i=10; i>=1; i--){
//     console.log(i)
// }

//! nested for loop

for(let i=0 ; i<=5 ; i++){
    for(j=1 ; j<=5-i ; j++){
        document.write(j);
    }
    document.write("<br>")
}
// 12345
// 1234
// 123
// 12
// 1

for(let i=1 ; i<=5; i++){
    for(j=1 ; j<=i; j++){
        document.write(j);
    }
    document.write("<br>")
}
// 1
// 12
// 123
// 1234
// 12345


for (let i=1; i<=5; i++){
    for(j=5; j>=i; j--){
        document.write(j)
    }
    document.write("<br>")
}
// 54321
// 5432
// 543
// 54
// 5


for (let i=1; i<=5; i++){
    for(j=5; j>=i; j--){
        document.write("*")
    }
    document.write("<br>")
}
// *****
// ****
// ***
// **
// *

for (let i=1; i<=5; i++){
    for(j=5; j>=i; j--){
        document.write("|")
    }
    document.write("<br>")
}
// |||||
// |||| 
// |||
// ||
// |