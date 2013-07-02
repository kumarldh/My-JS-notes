/*
 * Every object is linked to a protoype object from which it inherits. While creating 
 * an object define its prototype to "inherit" properties from prototype.
 */
function prototypeIt(object_to_prototype){
    var new_object = function(){};
    new_object.protype = object_to_prototype;
    return new new_object();
}
var parent = {
    a_property: "Place holder for a property."
};
var kid = prototypeIt(parent);
for(var prop in kid){
    console.log(kid[prop]);
}
//The hasOwnProperty method does not look at the prototype chain.