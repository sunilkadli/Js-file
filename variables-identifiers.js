
var x ; //Declaration
console.log(x);
console.log(x);

x = 10 ; //* initialization(assigning a value) of variable , In javascript we can initialize a variable with any type of data(string , number , boolean etc....)
console.log(x);  // 10

x = 20 ; //* Re-initialization of a variable , In javascript we can re-initialize a variable with any type of data(string , number , boolean etc....)
console.log(x);


var x = 30; //* Re - declaration of a variable , In javascript re-declaration is also possible , we can re-declare a variable with any type of data(string , number , boolean etc....)
console.log(x);


y = 1 ;  // In javascript we can declare a variable even without using any keyword , by default it considers var as the keyword
console.log(y);



console.log("----------------behavior of variable with let keyword--------------");

// ES6 (ECMA Script 2015)

let z; //Declaration
console.log(z);

z = 101; //initialization
console.log(z);

z = 1 //re-initialization
console.log(z);

// let z ;  //With let keyword In javascript re-declaration is not possible , once the variable is declared we cannot redeclare it //!Uncaught SyntaxError: Identifier 'z' has already been declared.



console.log("----------------behavior of variable with const keyword--------------");

const i = 10; //In const Declaration and initialization should be done at a time or in the same line

// i = 20;  //!Uncaught TypeError: Assignment to constant variable. re-initialization is not possible with const

// const i ; //!Uncaught SyntaxError: Identifier 'i' has already been declared. re-declaration is not possible with const


console.log(i);