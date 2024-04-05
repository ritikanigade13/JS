let score = "ritika"

console.log(typeof (score));

let valueInNumber = Number(score) //string
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN score="33abc" , score = null --> 0, score = undefined-->NaN, score = true --> 1?0
let isLoggedIn = "ritika"; // false , 1->true, ""-> false, "ritika"->true

let booleanIsloggedIn = Boolean(isLoggedIn);
console.log(booleanIsloggedIn);

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber) // 33
console.log(typeof stringNumber); 


// OPERATIONS...
let value = 3
let negativeValue = -value;
console.log(negativeValue);  //-3

console.log(2+2);// +,-,*,/,**(power),%(modulo)

let str1 = "hello"
let str2 = " ritika"


let str3 = str1 +str2;
console.log(str3);
let a = 1 + 2 + "2";
console.log(typeof a) //string
console.log(1 + "2"); //12 -->string
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); //32
// console.log((30+3)* 6%2);

console.log(+true);//-->1
console.log(+"");//-->0

let num1, num2, num3
num1=num2=num3=2+2
console.table([num1,num2,num3])
/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │   4    │
│    1    │   4    │
│    2    │   4    │
└─────────┴────────┘
*/

let gameCounter = 10
console.log(gameCounter);//10
++gameCounter;
console.log(gameCounter);//11
