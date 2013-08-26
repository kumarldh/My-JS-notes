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

/*
 * The Constructor Invocation Pattern
 * If a function is invoked with the new prefix, then a new object will be created 
 * with a hidden link to the value of the function's prototype member, and this 
 * will be bound to that new object.
 * 
 */
var hello = function(name){
    var name = name || "no name?";
    return function(name){ return("Hello " + name);}; //return a function, anonoymous 
    //function, and its a closure!
};
var world = new hello();//Functions that are intended to be used with the new 
//prefix are called constructors. hello() is a contstructor. 
console.log(world("World!"));
console.log( "hello.prototype.constructor = "+ hello.prototype.constructor );

/*
 * The Apply Invocation Pattern
 * The apply method lets us construct an array of arguments to use to invoke a 
 * function. It also lets us choose the value of this. The apply method takes two 
 * parameters. The first is the value that should be bound to this. The second is 
 * an array of parameters.
 */
function multiply(x, y){
    return (x*y);
}
console.log(multiply.apply(null, [1,2]));
console.log(multiply.apply(null, [2,3]));

//Anonymous functions, a) is name for the functon and b is anonoymous function, 
//function multimultiply(), ↑, is a named function.
//            ↓ a)                     ↓ b)
var name_for_an_anoynous_function = function(){
    console.log('anonymous function');
};
//compare the difference
console.log(multiply.prototype.constructor ); // returns [Function: multiply] -- 
//multiply
console.log(multiply.name ); // multiply
console.log(name_for_an_anoynous_function.prototype.constructor ); // returns [Function] 
//-- no name 
console.log(name_for_an_anoynous_function.name ); // returns nothing

/*
 * Function Scope.
 * Variable defined inside a function, with var keyword, are not visible outside 
 * function but function's internal body can access variables declared outside its 
 * body. Let's explore it.
 */
(function(){//Using immediately invoked function expression for this example.
    var global_a = 'Global A';
    function can_access_global_a(){
        var local_a = 'Local var of method can_access_global_a()';
        return global_a;
    }
    console.log(can_access_global_a());
//    console.log(local_a);//undefined!!!!
//look at variables.js for more.
})();