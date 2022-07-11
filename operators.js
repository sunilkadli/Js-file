// && (and operator)
// let num = 10;
// let num1 = 10;
// console.log(num == 10 && num1 == 20);

// || (or operator)
// let num = 10;
// let num1 = 10;
// console.log(num == 10 || num1 == 20);


// ++(increment)
// post increment
var x = 10;
var y = x++;
console.log(x); 
console.log(y);

// ++(increment)
// pre increment
var x = 10;
var y = ++x;
console.log(x);//11
console.log(y);//11

var x = 10;
var y = ++x + x++
console.log(x);//12
console.log(y);//22

var x = 10;
var y = ++x + x++ - ++x
console.log(x);//13
console.log(y);//9

var x = 10;
var y = ++x + x++ - ++x - x++
console.log(x);//14
console.log(y);//-4

// --(decrement)
// post decrement
var x = 10;
var y = x--;
console.log(x);//9
console.log(y);//10

// pre decrement
var x = 10;
var y = --x;
console.log(x);//9
console.log(y);//9

var x = 10;
var y = x-- + --x;
console.log(x);//8
console.log(y);//18

var x = 10;
var y = x-- + x-- + ++x - --x;
console.log(x);//8
console.log(y);//20

var x = 10;
var y = x++ - ++x + --x + x--;
console.log(x);//10
console.log(y);//20


