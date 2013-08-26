/*
 * arguments is an array like object, available "inside" every function. 
 */
function a(){
    console.log(arguments);
}
a("hello world!");//{ '0': 'hello world!' }
/*
 * It has length.
 */
function b(){
    console.log(arguments.length);
}
b("hello world!");//1
b("hello","world!");//2
b("hello","world","!");//3
b("hello","world","!", "");//4
b("","","", "");//4
/*
 * and a callee property. caller property is obselete...and using callee is frowned upon.
 */
function c(){
    console.log("arguments.callee is "+arguments.callee);
}
c("hello world!");//returns the calling function
/*
 * iterating through arguments.
 */
function d(){
    for(arg in arguments ){//for key in object
        console.log(arg + " = " + arguments[arg]);
    }
}
d(1,2,3);
function e(){
    for(var i=0; i < arguments.length; i++ ){//another, and better, way to iterate
        console.log(arguments[i]);
    }
}
e(1,2,3);

/*
 * convert to array, so that it can have pop and push or other array methods. 
 */
function f(){
    var arg_array = Array.prototype.slice.call(arguments);
    console.log(arg_array.pop());
    console.log(arg_array.push("hello world!"));
    console.log(arg_array);
    console.log(typeof arg_array);
}
f(3,4,5);