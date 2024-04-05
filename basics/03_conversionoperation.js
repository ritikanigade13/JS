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
console.log(stringNumber)
console.log(typeof stringNumber);