// console.log(new Date());

// Date Methods:
let date = new Date();
console.log(date);

console.log(date.getFullYear());
console.log(date.getMonth()); // jan 0 , dec 11
console.log(date.getDate());
console.log(date.getDay());
console.log(date.toLocaleDateString());

let getDate_btn = document.getElementById("getDate_btn");
getDate_btn.addEventListener("click" , () =>{
    alert("Today's Date is " + date.toLocaleDateString())
})

// time methods of date()
console.log(date.getTime());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.toLocaleTimeString());


// let currentTime = date.getHours();
// if(currentTime >= 6 && currentTime <=12){
//     alert("Gud Morning")
// }
// else if(currentTime > 12 && currentTime <= 18){
//     alert("Gud Afternoon")
// }
// else{
//     alert("Gud evening")
// }

//Math :An intrinsic object that provides basic mathematics functionality and constants.
console.log(Math);
console.log(Math.PI);

console.log(Math.max(1 , 3 , 100));

let nums = [10 , 1 , 2 , 4 , 5]
console.log(Math.max(...nums));

console.log(Math.min(1 , 2 , 3 , 100));
console.log(Math.min(...nums));

console.log(Math.round(2.5));

console.log(Math.round(2.4));

console.log(Math.ceil(2.1));

console.log(Math.floor(2.9));


let num = Math.random()*10000;
var otp = Math.floor(num)
console.log(otp);


let otp_btn = document.getElementById('otp-btn');
otp_btn.addEventListener("dblclick" , () =>{
    alert(otp);
})


console.log(Math.sqrt(16));

console.log(Math.cbrt(91));

console.log(Math.pow(2 , 3));

console.log(Math.trunc(2.9)); // trunc will neglect all the decimal places
