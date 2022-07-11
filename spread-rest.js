// Rest Operator
// spread Operator

// Rest Operator : By using rest we can create a function/method which accepts n number arguments.
// rest makes a function to return an array of arguments

function techs(...x){
    return x
   }
   console.log(techs("HTML" , "CSS"))
   
   function addNums(...a){
      
       let sum = 0;
       for(let i=0 ; i<a.length ; i++){
           sum += a[i]
       }
       return sum;
   }
   console.log(addNums(2 , 3 , 10 , 4));
   
   
   // spread Operator:
   // spread helps conactinating arrays , passing an array as argument to a function etc..
   let arr1 = ["Audi" , "Xuv500"];
   let arr2 = ["Baleno" , "Polo GT"];
   
   let arr3 = [ ...arr1 , ...arr2];
   console.log(arr3);
   
   
   
   
   
   
   let n = [10 , 20 , 30 , 10];
   
   function sum(...a){
       let s = 0;
       for(let i=0 ; i<a.length ; i++){
           s += a[i]
       }
       return s;
   }
   console.log(sum(...n));
   