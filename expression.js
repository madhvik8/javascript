// //function expresion catSays
// var catSays = function(max){
//     var catMessage = "";
//     for (var i = 0; i < max; i++) {
//         catMessage += "meow ";
//     }
//     return catMessage;
// };
// //function declaration helloCat accepting a callback
// function helloCat(callbackFunc) {
//     return "Hello " + callbackFunc(3);
// }
// //pass in catSays as a callback function
// console.log(helloCat(catSays))

// var favoriteMovie = function displayFavorite(movieName){
//     console.log("My favorite movie is " + movieName);
// };
// function movies (messageFunction, name) {
//     messageFunction(name);
// }
// movies(favoriteMovie, "Bahubali");

// function SayHello()
// {
//     console.log("Hello");
// }
// function SayGoodBye()
// {
//     console.log("Good bye");
// }
// SayHello();
// setTimeout(SayGoodBye, 5 * 1000); //Invokes SayGoodbye function after 5 seconds.

// function getAreaOfCircle(radius)
// {
//     return function()
//     {
//         return Math.PI * radius *radius;
//     };
// };

// let area = getAreaOfCircle(5);
// console.log(area());

//ARRAY
var donuts = ["cookies", "cinnamon sugar", "creme de leche"]
donuts.splice(1, 2, "chocolate frosted");
for(i=0; i<donuts.length; i++){
    console.log(donuts[i]);
}

// var donuts = ["glazed", "powdered", "sprinkled"];
// console.log(donuts.length);