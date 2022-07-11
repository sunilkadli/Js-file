// String is both primitive and non-primitive

// Declaration of Strings in javascript.

let str = "salman"
console.log(typeof str); //string

str = 'salman';
console.log(typeof str); //string

str = ` salman`;
console.log(typeof str); //string

let s = new String("Jspiders");
console.log(s);
console.log(typeof s); //object

// String Methods

// concat() : IT Returns a string that contains the concatenation of two or more strings.
// It accepts any number arguments.
let me = "Iam very bad";
let z = me.concat(str);
console.log(z);

//includes() : true / false
// It Determines whether a string includes a certain charecter or not and it returns true or false as appropriate.
// It accepts 2 args - searchString(case sensitive) , index position(to start the search)

var bool = me.includes("v")
console.log(bool);

var bool = me.includes("iam")
console.log(bool); // false

var bool = me.includes("m" , 5)
console.log(bool);


// indexof():It Returns the index of the first occurrence of a value in a string, or -1 if it is not present.
// it accepts 2 arg - searchElement , indexposition to start seracing the charecter
// 2nd arg is optional
var x = me.indexOf('v');
console.log(x); // 4

var x = me.indexOf('i');
console.log(x); // -1

var x = me.indexOf('a' , 2);
console.log(x); // 10

//slice(): it creates a copy of the original string by slicing/cutting elements from the specified index position , without affecting original string
// it takes 2 args - startIndex , endIndex(optional)

var jsp = "Jspiders";
console.log(jsp.slice(1)); //spiders


var jsp = "Jspiders";
console.log(jsp.slice(1 , 7)); // spider

var jsp = "Jspiders";
console.log(jsp.slice(3 , 5)); //id


//split() : split() converts a string into an array.
// it accepts 2 arguments - separator("") , limit(A value used to limit the number of elements returned in the array.)
let w = jsp.split();
console.log(w);
console.log(typeof jsp); // string
console.log(typeof w); // object

w = jsp.split("");
console.log(w);

w = jsp.split("" , 5);
console.log(w);

// write a p to reverse any given string
// let gString = prompt("Enter a string value");
// function revstr(){
//   return  gString.split("").reverse().join("")
// }

// alert(revstr());

// charCodeAt():
// It retuns ASCII value of a charecter
// and It Returns the ASCII value of the character at the specified location.
// It accepts 1 arg - index position(optional)
console.log('A'.charCodeAt()); //65

console.log('Abd'.charCodeAt(2)); //100

// charAt() : Returns the character at the specified index
console.log("Abd".charAt(1)); // b

console.log("fooo".charAt(0)); //f

// replace(): It Replaces text in a string
// It accepts 2 arguments - searchValue , replaceValue
var i = me.replace("bad" , "good");
console.log(i);

// toUpperCase()  Converts all the alphabetic characters in a string to uppercase.
var upper = jsp.toUpperCase()
console.log(upper); // JSPIDERS

// toLowerCase() :  Converts all the alphabetic characters in a string to lowercase.
var lower = jsp.toLowerCase()
console.log(lower); // jspiders

// repeat() : Returns a String value that is made from count copies appended together
// it accepts one arg - count(number of copies to append)
var rep = "*".repeat(2);
console.log(rep);

// *****
// ****
// ***
// **
// *
// star pattern program
for(let i = 5 ; i>=1 ; i--){
    // console.log(i);
    let star = "*".repeat(i)
    console.log(star);
}
