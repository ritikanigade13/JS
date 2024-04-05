// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2">1); // true
console.log(null>0);// false because null is not greater than 0
console.log(null == 0);
console.log(null >= 0 );// true,//comparisions check converts null to a number ieit i
console.log(null === 0);// false


// === check value as well as datatype

console.log("2"===2)// false

/*
In JavaScript, == and === are both comparison operators, but they behave differently.

== (Equality Operator):

The == operator checks for equality after performing type conversion if necessary. It does not consider the data type of the operands.
If the operands are of different types, JavaScript will attempt to convert them to a common type before making the comparison.
For example, 1 == '1' would return true because JavaScript coerces the string '1' to the number 1 before comparing them.
This type of comparison can lead to unexpected results, especially when dealing with different data types.
=== (Strict Equality Operator):

The === operator, also known as the strict equality operator, checks for equality without performing type conversion.
It compares both the value and the data type of the operands.
For the expression to return true, both the value and the data type of the operands must be the same.
For example, 1 === '1' would return false because '1' is a string, and 1 is a number.
=== is considered safer and generally recommended for comparisons because it avoids unexpected type coercion.
*/
