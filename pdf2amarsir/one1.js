{
    let getCartBill = function()
    {
        let sum = 0;
        for (let i=0; i< arguments.length; i++)
        {
            sum = sum + arguments[i]; 
        }
        return sum;
    }
    console.log(getCartBill(13)); //13
    console.log(getCartBill(54, 90, 120, 4)); //268
    console.log(getCartBill(55, 91, 1500, 30, 78, 23, 90)); //1867
}
//Recursion in functions
{
    let factorial = function(n)
    {
        if (n == 1)
        {
            return 1;
        }
        else{
            return factorial(n - 1) * n;
        }
    }

    console.log(factorial(5));
}
{
    let getNetAmout = function(Amount, intRate = 18)
    {
        let netAmout = Amount + (Amount * intRate/100);
        return netAmout;
    }
    let netAmoutOfProduct1 = getNetAmout(1000, 10);
    console.log(netAmoutOfProduct1);
    let netAmoutOfProduct2 = getNetAmout(5600);
    console.log(netAmoutOfProduct2)
}
{
//function expression catSays
var catSays = function(max) {
    var catMessage = "";
    for(var i = 0; i < max; i++){
        catMessage += "meow ";
    }
    return catMessage;
};
//function declaration helloCat accepting a callback 
function helloCat(callbackFunc) {
    return "Hello " + callbackFunc(3);
}
//pass in catSays as a callback function
console.log(helloCat(catSays));
}
{
var favoriteMovie = function displayFavorite(movieName) {
    console.log("My Favorite movie is " + movieName);
};
function movies(messageFunction, name){
    messageFunction(name);
}    
movies(favoriteMovie, "Bahubali");
}
{
    function SayHello()
    {
    console.log("Hello");
    }
    function SayGoodBye()
    {
    console.log("Good bye");
    }
    SayHello();
    setTimeout(SayGoodBye, 5 * 1000); 
    //Invokes SayGoodBye function after 5 seconds.
}
{
    function getAreaOfCircle(radius)
    {
        return function()
        {
            return Math.PI * radius * radius;
        };
    };
    let area = getAreaOfCircle(5);
    console.log(area());
    }
    {
        var donuts = ["cookies", "cinnamon sugar", "creme de leche"]  
        donuts.splice(1,2, "chocolate frosted");
        for(i=0; i<donuts.length;i++){
            console.log(donuts[i]);}  
        }
        {
        var donuts = ["glazed", "powdered", "sprinkled"];
        console.log(donuts.length);    
        }
        {
        var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
        donuts.forEach(function(donut){
            donut += "hole";
            donut = donut.toUpperCase();
            console.log(donut);
        });    
        }    