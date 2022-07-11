// primitive datatypes
    // undefined
    // number
    // string
    // boolean
    // null
// Non-primitive datatypes:
    // Array
    // String
    // Object
    // function

//? undefined datatype:
let x ;
console.log(x); // undefined
// alert(typeof(x));
console.log(typeof(x)); // undefined

//* typeof operator is used to check the datatype of the variable in JAVASCRIPT
//* The datatype of a undefined variable in javascript is undefined.

//? number datatype:
let num1 = 10 ;
console.log(num1);
console.log(typeof(num1)); // number

let num2 = 10.10 ;
console.log(num2);
console.log(typeof(num2)); // number

let num3 = 10.123456575;
console.log(num3);
console.log(typeof num3); // number


//? string datatype: In javascript strings can be of " "  ,  ' '  , ` `(backtick)
let str = "Jspiders";
console.log(str);
console.log(typeof str); // string

let str2 = 'Qspiders';
console.log(str2);
console.log(typeof str2); // string

let str3 = `Pyspiders`;
console.log(str3);
console.log(typeof str3); // string

let char = 'A';
console.log(char);
console.log(typeof char); // string


//? boolean datatype:
let bool = true ;
console.log(bool);
console.log(typeof bool); // boolean

let bool2 = false ;
console.log(bool2);
console.log(typeof bool2); // boolean

//? null:
let foo = null;
console.log(foo);
console.log(typeof foo); // object


// Non-primitive datatypes:
//? Non - primitive datatypes refers to objects in javascript
//? all these non-primitive datatypes(except functions) are created with the help of new key word and a class constructors which are predefined in javascript
// Array
let arr = new Array(1 , 2 , 3 , 4);
console.log(arr);
console.log(typeof arr); // object  , datatype of an array in javascript is object and the arrays are mutable(we can modify)
arr.push(5);  // push method is used to add elements into an array
console.log(arr);


// String
let string = new String('good morning');
console.log(string);
console.log(typeof string); // object , datatype of non primitive string in javascript is object and these are mutable(we can modify)
let y = string.toUpperCase();
console.log(y);


// Object
let obj = new Object({
    Name : "John Doe" ,
    Sid : 1111 ,
    Age : 20
});

console.log(obj);
console.log(typeof obj);  // object ,  datatype of an object in javascript is object itself and these objects are mutable(we can modify)
obj.Name = "Rock" ;
console.log(obj);

// function
function myFunction(){
    alert("Hello World") ;
}
myFunction();

console.log(typeof myFunction); // function  , Javascript functions doesn't have a datatype , but when we find the datatype of a function using typeof operator it returns a function . this is because in javascript a function is an object