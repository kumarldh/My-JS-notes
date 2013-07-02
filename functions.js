/*
 * A function is a piece of program wrapped in a value. A value can be stored in 
 * a variable. A variable can be passed as an argument to a function. A function 
 * can return a value. Functions in JavaScript are objects. Function objects are 
 * linked to Function.prototype (which is itself linked to Object.prototype).
 */
function helloName(name){
    var name = name || "no name?";
    return ("Hello " + name);
}

console.log(helloName("John Doe"));
//There is no type checking on the argument values: any type of value can be 
//passed to any parameter.
console.log(helloName(1234567890));
//if no param passed, the param will be set to undefined, which is being handled 
//in function
console.log(helloName());
/*
 * There are four patterns of invocation in JavaScript: the method invocation 
 * pattern, the function invocation pattern, the constructor invocation pattern, 
 * and the apply invocation pattern. The patterns differ in how the bonus 
 * parameter this is initialized.
 */

/*
 * The Function Invocation Pattern
 * When a function is invoked with this pattern, this is bound to the global object.
 */
var helloWorld = helloName("World!");//Hello World! this points to global scope 
//here, if executed in browser, the "inside" of function will have access to 
//window.{property_name}

/*
 * The Method Invocation Pattern
 * When a method is invoked, this is bound to that object.
 */
var greet = {
    hey: "Hey ",
    hello_method: function(name){
        var name = name || "no name?";
        return ("Hello " + name);
    },
    hey_method: function(name){
        var name = name || "no name?";
        return (this.hey + name);
    }
};
console.log(greet.hello_method());
console.log(greet.hey_method("John Doe"));