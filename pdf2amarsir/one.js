// function one(){
//     console.log("Hello Madhvi..!")
// }
// one();
{
function two(a,b) {
    var c = a+b
    console.log("Sum of a and b is ",c)
}
two(5,5);
two(20,30);
}
{
    function two(a,b) {
        var c = a+b
        console.log("Sum of a and b is ",c)
    }
    var a = 10
    var b = 30
    two(a,b);
}
{
function sleep() {
    console.log("I'm sleepy!");
    return "zzz";
    return "snore";
}
console.log(sleep());
}
{
function square(x) {
    return x * x;
}
function subtractFour(x){
    return square(x) -4;
}
console.log(subtractFour(5));
}
{
    let isValid=function(un, pwd)
    {
        if (un=="amar" && pwd=="999")
        return true;
        else
        return false;
    }
    console.log(isValid("amar","999"));
}
{
    function addTen(x){
        return x + 10;
    }
    function divideByThree(y) {
        return y / 3;
    }
    var result = addTen(2);
    console.log(divideByThree(result));
}