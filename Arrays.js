let nums = new Array(1 , 2 , 3 , 4);
console.log(nums);
console.log(typeof nums);

// index value starts from 0


// es6 or 2015 version :
// declaration using array literals

let cars = ['maruti 900' , "nano"];
console.log(cars);
console.log(typeof cars);


// alert("First Car is " + cars[0])

// array modification using index values
//todo - read elements from the array
console.log(cars[0]);
console.log(cars[1]);

//todo - insert elements into the array
cars[2] = "Baleno";
console.log(cars);

cars[4] = "Xuv500";
console.log(cars); // insertion using index values lead to create empty holes inside the array so its not recomonded to use this way of inserting elements , we can use array methods to insert

//todo - update elements of the array
// if i use the index value which is already existed then we can update the element
cars[4] = "Xuv700";
console.log(cars);

//todo - delete elements from the array
delete cars[0];
console.log(cars);// deleting elements using index values leads to create empty holes inside the array so its not recomonded to use this way to delete elements ,, we can use array methods to insert


// array methods
let fruits = ["Apple" , "Banana" , "Kiwi"];
console.log(fruits.length);

// pop(): Removes the last element from an array and returns it.
// It will not accept any argument
var element = fruits.pop();
console.log(fruits);
console.log(element); // removed element

element = fruits.pop()
console.log(fruits);
console.log(element);

//push():Appends new elements to the end of an array, and returns the new length of the array.
// It will accept one or more arguments
var length = fruits.push("pineapple");
console.log(fruits);
console.log(length);

var length = fruits.push("Dragon" , "Orange" , "lemon");
console.log(fruits);
console.log( length);

//shift(): Removes the first element from an array and returns it
// It will not accept arguments
var element = fruits.shift()
console.log(fruits);
console.log(element);

fruits.shift();
console.log(fruits);
console.log(element);

//unshift(): Appends new elements to the start of an array, and returns the new length of the array.
// It will accept one or more arguments
var length = fruits.unshift("Grapes");
console.log(fruits);
console.log(length);

fruits.unshift("A fruit" , "B fruit");
console.log(fruits);

// splice():
//? syntax : array.splice(indexValue , deleteCount , one or more elements to insert into the array)
// splice method is used to delete , add , or update elements from the array

//todo - deleting elements using splice
fruits.splice(2 , 1);
console.log(fruits); // it deletes 1 element from 2nd index value

fruits.splice(2 , 2);
console.log(fruits); // it deletes 2 elements from 2nd index value

//todo - adding elements using splice
// fruits.splice(2 , 0 , "C Fruit");
// console.log(fruits);

fruits.splice(2 , 0 , "D Fruit" , "E Fruit");
console.log(fruits);

//todo - updating elements using splice:
fruits.splice(3 , 1 , "F Fruit");
console.log(fruits);

fruits.splice(1 , 2 , "Q Fruit" , "J Fruit");
console.log(fruits);


//slice(): it creates a copy of the original array by slicing/cutting elements from the specified index position
// it takes 2 args - startIndex , endIndex(optional)
var slicedArray = fruits.slice(2);
console.log(slicedArray);
// console.log(fruits);

var slicedArray = fruits.slice(2 , 4);
console.log(slicedArray);

// sort(): it sorts the array based on the asscending order of the ascci values.
let students = ["Salman" ,"Salman" , "Yash" , "Aamir" , "amie" , "sharuk"];
var std = students.sort();
console.log(std);

// ASCII - charCodeAt()
console.log("A".charCodeAt()); //65
console.log("B".charCodeAt()); //66
console.log("Z".charCodeAt()); //90
console.log("a".charCodeAt()); //97
console.log("z".charCodeAt()); //122
console.log("s".charCodeAt()); //115

//reverse(): It Reverses the elements in an array
console.log(std);
var rev = std.reverse()
console.log(rev);

let numbers = [1 ,1000 , 3 , 10 , 5 , 100];
var numsort = numbers.sort();  // sorting based on asccending order of ascci value
console.log(numsort);

console.log("1".charCodeAt()); //49
console.log("10".charCodeAt()); //49
console.log("1000".charCodeAt()); //49
console.log("3".charCodeAt()); //51
console.log("5".charCodeAt()); //53

//todo - to sort the array of numbers in asscending or in descending order we use a compare function as the argument to the sort() method


// var numsort = nums.sort(function(a , b){
//     return b-a ;  // if a-b it sorts in asscending order
// })
// console.log(numsort);

// var numsort = students.sort(function(a , b){
//     return b-a ;  // if b-a it sorts in descending order
// })

var numsort = students.sort((a , b) => a-b)  // if a-b it sorts in descending order)
var numsort = students.sort((a , b) => b-a)  // if b-a it sorts in descending order)


//concat():Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let arr1 = ["A" , "B"];
let arr2 = ["C" , "D"];
let arr3 = arr1.concat(arr2)
console.log(arr3); // ["A" , "B" , "C" , "D"]
console.log(arr1); // ["A" , "B"]

//join(): Adds all the elements of an array into a string, separated by the specified separator string.
// it converts array to string
// join() accepts one seperator as the argument , ie A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
var s = students.join('/');
console.log(s);

var s = students.join('*');
console.log(s);

var s = students.join('|');
console.log(s);

var s = students.join(" ,");
console.log(s);

console.log(typeof students); // object
console.log(typeof s); // string


//todo reverse any given string:

// var x = "salman".split(""); // split converts a string into an array
// var y = x.reverse() // it reverses the array elements
// console.log(y.join("")); // join converts array to string

// let gString = prompt("Enter a string value");
// function revstr(){
//   return  gString.split("").reverse().join("")
// }
// alert(revstr());

// toString() : It Returns a string representation of an array.
console.log(numbers.toString());

//! indexof() : Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// it accepts 2 arg - searchElement , indexposition to start seracing the element

console.log(students);
console.log(students.indexOf("Salman"));
// console.log(students.indexOf("Salman" , 4));

// function a(student){
//     if(students.indexOf(student) == -1){
//         // alert("element not exists")
//         students.push(student)
//     }
//     else{
//         alert("student exists")
//     }
// }
// a("Salman");

// console.log(students);


//! includes(): It Determines whether an array includes a certain element or not and it returns true or false as appropriate.

console.log(cars.includes('Audi 3Q'));
console.log(cars.includes('nano'));