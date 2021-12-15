//function call
function run(par) {
    console.log(par);
}
var par = 'Rajkumar';
run(par);
//console.log('\t');
//function declaration..
function loggin(mesg) {
    console.log(mesg);
}
//variable 
var x = 5;
var z = 100;
var mesg = x + z;
loggin(mesg);
//Arrow function ( shortest way...)
var ab = function (variable) { return console.log(variable); };
var variable = 19;
ab(variable);
//evaluate the javascript code and execute it..
var var1 = 3;
var var2 = 5;
console.log(eval("var1+var2"));
console.log(var1 + var2);
//objects  (everything in the javscript is an object)
var person = {
    //property : value
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
var x1 = person;
x1.age = 10; //object are mutable  || objects are referenced by the address...
console.log(person.age, person.eyeColor);
var func = function (para) {
    console.log(para);
};
func({
    z1: 10,
    z2: 80
});
