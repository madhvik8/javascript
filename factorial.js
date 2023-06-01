// let factorial = function(n)
// {
//     if (n == 1)
//     {
//         return 1;
//     }
//     else
//     {
//         return factorial(n-1)* n;
//     }
// }
// console.log(factorial(5));

let getNetAmout = function(Amount, intRate = 18)
{
let netAmout = Amount + (Amount * intRate / 100);
return netAmout;
}
let netAmoutOfProduct1 = getNetAmout(1000, 10);
console.log(netAmoutOfProduct1);
let netAmoutOfProduct2 = getNetAmout(5600);
console.log(netAmoutOfProduct2)
// var x = 1;
// function addTwo(){
//     x = x + 2;
// }
// addTwo();
// x = x + 1;
// console.log(x);
// sayHi("Julia");
// function sayHi(name) {
//     var greeting = "Hello";
//     console.log(greeting + " " + name);
// }
