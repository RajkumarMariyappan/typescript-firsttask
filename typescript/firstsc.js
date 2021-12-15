//function call
function run(par) {
    console.log(par);
}
var par = 'Rajkumar';
run(par);
//console.log('\t');
//funcrtion declaration..
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
//data types inn typescript
var a = 5;
var b = 'Raj kumar';
var c = "hai";
console.log(a, b);
//enum 
var color;
(function (color) {
    color[color["blue"] = 0] = "blue";
    color[color["red"] = 1] = "red";
    color[color["black"] = 2] = "black";
})(color || (color = {}));
var back = color.black;
console.log(back);
