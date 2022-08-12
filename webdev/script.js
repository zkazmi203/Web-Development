var message = "HELLO WORLD";
console.log("This is Global Variable: " + message);

var first_function = function(){
    var message ="I M FIRST FUNCTION";
    console.log("HELLO : " + message);
    second_function();


function second_function(){
    console.log("HI I M SECOND FUNCTION, " + message);
}
}
first_function();
//types of js
var a;
a = 2;
console.log(a)
var x,y;
x=4;
y="HI";
console.log(x);
console.log(y);