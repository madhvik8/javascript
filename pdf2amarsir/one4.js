{
    var person = {
    personName: "Scott",
    birthDay:function(){
        console.log(this);
        return `Happy Birthday to ${this.personName}`;

    }
};
 this.x = 100;
 console.log(this);
 console.log(person.birthDay());
// // console.log(person.personName); 
//  console.log(person);
}
// {
//Adding properties and methods outside of Object:
// var student = {};
// console.log(student);
// student.marks = 90; //adding property 
// student.getResult = function() { //addding method
//     if (this.marks >= 35)
//     return "Pass";
//     else
//     return "Fail";
// };
// console.log(student);
// console.log(student.marks); //call property
// console.log(student.getResult()); //call method
// }