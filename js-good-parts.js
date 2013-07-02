/*
Javascript Good Parts

check for "undefined" with "&&". Example x && x.p && x.p.q

while enumerating use hasOwnProperty to avoid properties not belonging to self.

typeof tells - undefined, object, function. number, string etc.

there is no block scope. Define variable at top. Function definitons get hoisted to top. "hoisting" causes global variables redefined in the function to be hidden before decleration.

closure referes to live variables. If value at that point is needed, take a parameter into the closure.

module pattern - a closure with private variables & impleentation followed by returning a object or function.

currying & partial application like Y.Bind.

memoization for caching via function's static variables

every "function" has prototype object. every object instance has hidden link to its prototype, which is the prototype of its constrcutor.

clasical inheritence - uses a temprary constrcutor so that child has its own property object and properties are not inherited.

inherit(c,p){
  function F(){}
  F.prototype = P.prototype;
  C.prototype = new F();
}

standard for loop is faster in the for-in loop.

use = over == to avoid uninteded mistakes

to check if an object is array - Object.toString returns [object array]

return
{

}
is treated as return; followed by unreachable object.
Alaways use return {

High performance javascript

script download blocks other downloads

js execution blocks other threads and everything

move js to bottom

dynamic tag insertion does not block other downloads.
gets executed as soon as downloaded.
order is not gauranteed.
use explicit chaining to guarantee order

defer attribute executes after onload and behaves like dynamic tags.

the lookup chain while executing any function is - execution context (loca params + args) followed by the scope chain at the point of definition

deeper the look up in the chain, slower it is.

local vars are the fastest; Similarly object literals & array literals are faster than their "new" versions. Primitives are faster than their wrappers. Based on lookup chains, closures are slower than normal functions.

access dom minimally. Cache dom variables.

html collection is always live. cache its length property. Array traversal is faster than collection traversal.
Always cache array length too.
Copy html collection into array if needed.

cloning nodes is not big gain.

for dom traversal use mthods that only return elements and not redundant nodes. elementXXX versions.

nextSibling is faster than childNodes method.

querySelectorAll or querySelector are supported natively. They are much faster then getElementXXX.

reflow - when layout changes
repaint - when just look changes

calling offset, scroll, client and computed cause reflow.
call them minimaly.

Batch style changes

use document fragment to alter dom and then re insert into main dom.

with animation, make postion absolute and make changes and re insert.
this minimizes reflwo area

use event delegation to minimize handlers

use iteration over recursion if needed

str+= x
str = str + x
do not need temporary
str += x+y needs

join is also fast

In IE7 and before every "+" operation on string creates a temporary.

JS execution should not exceed 50ms

use setTimeout

min interval is 25ms so that browsers with lesser resolution still work correctly without locking etc.

custom fromat is fastest

jsonp is next fastest

json parse is next

xml and html are last

multipart xhr - use readystate 3 and parse data as it comes delimited as needed

eval and "with" are bad for performance

bitwise operators are fast. use as needed.
like i & 1 instead of i%2 == 1

prefer native JS methods since they are fast

JS patterns

self invoking constrcutor to protect against new
-- if not instance fo self invoke with new

json - needs quotes around property names. Object literals do not

self defining functions

init time branching

currying & partial application

imediation function invocation
-- may return function or object
-- basis of moduel pattern

module patern
-- privates
-- return something

sandbox pattern
-- passes itself to each module
-- they atatch themselves to it

public static members

private static members

classical inheritance

prototypical inheritence

copying properties

borrowing methods & mixins

beacons with 1x1 images for simple pings 
*/