/*
 * foo declared but not defined
 */
var foo; 
console.log('foo is ' + foo);
/*
 * bar has not been declared
 */
console.log('Is typeof bar undefined? ' + (typeof bar === 'undefined'));
/*
 * using bar must throw some error, commented to let script execute
 */ 
//console.log(bar);

/*
 * As soon as JS encounters a "var variablename" it creates that variablename and "hoists" it to the immediate scope. In JS only functions have the power to alter scope. foo is tied to global scope. This foo will be available throughout this file and will be undefined till it is not defined at some point of time. 
 */

/*
 * BTW 
 */
console.log('Is keyword undefined = typeof "undefined"? This is ' + (typeof undefined === 'undefined') + '.');
/*
 * because no one defined undefined and it remains undefined until unless some code ninja defines it. This is the same reason jquery takes time to mention window and undefined as arguments but doesn't pass undefined. Look at first and last line of code.
 * Let us define foo
 */
foo = 'foo is happy to be a string';
console.log('value of foo is -> (' + foo + ') and typeof foo is ' + typeof foo);
/*
 * Function with no arguments, just console.logs something doesn't return anything, so return type is undefined
 */
function logFooV1(){
 console.log('Logging foo inside logFooV1()  -> '+foo);
}
logFooV1();
var logFooV1ReturnValue = logFooV1(); 
console.log('logFooV1ReturnValue actually holds -> '+logFooV1ReturnValue);
/*
 * logFooV1ReturnValue actually contains a value returned by logFooV1(), which returns nothing i.e. undefined.
 * Let us have a function that actually returns something.
 */
/*
 * Function returns value of foo
 */
function logFooV2(){
    return foo;
}
logFooV2(); 
console.log('logFooV2() = ' + logFooV2());

/*
 * But all those functions have been using foo which is a global variable and "they" say globals are not good.
 */

/*
 * Function returns value of foo
 */
function logFooV3(){
    if(typeof foo === 'undefined'){
        var foo = 'No strings attached!';
    }
    return foo;
}
console.log('logFooV3() = ' + logFooV3()); //logs "No strings attached!"

/*
 * Wait...what? How? Why?
 * As soon as JS encounters a statement like 'var variableName = "some value";', JS creates variable and doesn't initialise it and hoists it to top of the scope. So when JS reads logFooV3 the structure some how looks like
 * +----------------------------------------------+
 *  | #global_space
 *  |  look or all var statements on global level and create variables like foo, logFooV3 etc. everything is still undefined but created or hoisted at top
 *  |  set values to all created vars, time to set value for foo and logFooV3, logFooV3 is a function, functions create new scope
 *  |  - #logFooV3 scope
 *  |  - look or all var statements on function level and create variables like foo etc. everything is still undefined but created or hoisted at top of logFooV3.
 *  |  - is typeof foo undefined?
 *  |  -  - yes, so assign foo some value
 *  |  - return foo
 * +----------------------------------------------+
 * This is known as hoisting. This lets you do the following. 
 */
bar = 'a bar of dark chocolate!'; //use variable here which has not been created. "use strict" will never let you do this. 
console.log('when I say bar I mean ' + bar); //point to remember
var bar;

/*
 * More https://developer.mozilla.org/en/JavaScript/Reference/Statements/var#Examples.
 * So as of now we know undefined means a variable doesn't exist or has not been defined or initialised. But how do we diffrentiate between a non existant variable and an existing but non initialised/declared variable. Declaring a variable actually means assigning a value to a variable. 
 */
var baz; //baz is declared but is undefined or not initialised.
console.log((baz === null));//baz will have null value
baz = 'bazzinga!';//baz exists and is defined.
/*
 * The difference in meaning between undefined and null is mostly academic, and usually not very interesting. In practical programs, it is often necessary to check whether something 'has a value'. In these cases, the expression something == undefined may be used, because, even though they are not exactly the same value, null == undefined will produce true.
 * Source: http://eloquentjavascript.net/chapter2.html
 * But now I have some apprehensions about it.
 */


/*
 * Unlike many other languages, blocks in JavaScript do not create a new scope, 
 * so variables should be defined at the top of the function, not in blocks.
 * 
 **/
var hello = "Hello ";
{
    var world = "World!";
}
console.log(("Hello World!" === (hello + world)));//true
/*
 * The falsy values:
 * · false
 * · null
 * · undefined
 * · The empty string ''
 * · The number 0
 * · The number NaN
 * All other values are truthy, including true, the string 'false', and all objects.
 * 
 */
console.log((false === "false"));//false, "false" is a string