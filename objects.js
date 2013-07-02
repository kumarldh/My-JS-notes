/*
 * In JS, everything is an object or typeof some object. Objects have properties(and methods). Some argue that JS has "native" data types like String, Number, Boolean and Null etc but they all have properties attached to them which make them behave like an object.
 */
var foo = 'FUBAR'; // a string object
console.log(foo.length); //strings have length property
console.log(foo.toLowerCase());  //can be converted into lower case using toLowerCase() method.
/*
 * Properties in all JS objects have a descriptor field associated with them that tells that whether a property is 
 *  - writable - is the property modifiable?
 *  - configurable -  whether the property can be deleted from the object?
 *  - enumerable - is property "iterate"-able?
 * More at: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/defineProperty
 */
foo.length = 10; // This is wrong 
console.log(foo.length); // String.length can not be modified, this is "illegal" :-|
/*
 * Now, to confuse further, JS has objects of type Object. (And even typeof function;-)
 */
var bar = {'objType':'Chocolate bar'}; //this is known as JS Object literal, "they" say this is the best way to create an object, with an initial property.
var baz = new Object(); // creates an object of type Object.
/*
 * Adding properties to an object.
 */
bar.type = 'dark chocolate';
bar['cocoa_level'] = '55%';
/*
 * Properties can be accessed same way.
 */
console.log(bar.type);
console.log(bar['cocoa_level']);
/*
 * or
 */
for(var property in bar){
    console.log(bar[property]); // but bar.property will not work, why?
}
/*
 * or
 */
for(var i=0; i < bar.length; i++){
    console.log(bar[i]);
}

/*
 * An object is a container of properties, where a property has a name and a value. 
 * A property name can be any string, including the empty string. A property value 
 * can be any JavaScript value except for undefined.
 * 
 */

//Object literals
var Person = {};

//Setting properties
Person.first_name = "John";
Person["last_name"] = "Doe";
//Getting properties
console.log("Like an array key " + Person["first_name"]);
console.log("Using a dot operator " + Person.last_name);
//Or using "this"
Person.getInfo = function(){
    //this refers to "this" object which is Person "John Doe"
    return (this.first_name + " "+ this.last_name);
};
console.log(Person.getInfo());

//Objects are passed around by reference. They are never copied.
var a = {}, b = {}, c = {};
// a, b, and c each refer to a different empty object
var d = e = f = {};
// d, e, and f all refer to the same empty object
a.some_property = "Limited to a";
d.some_property = "d, e and f will have same copy!";

console.log(a.some_property);
console.log(b.some_property);//undefined
console.log(e.some_property);