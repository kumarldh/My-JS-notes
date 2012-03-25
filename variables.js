/*
 * foo declared but not defined
 */
var foo; 
console.log(foo);
/*
 * bar has not been declared
 */
console.log((typeof bar === undefined));
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
 * But all those functions have been using foo which is a global variable and "they" globals are not good.
 */