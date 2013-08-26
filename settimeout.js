/* 
 * setTimeout 
 */
function log(me){
    console.log("Logging");
    console.log(me);
}

setTimeout(log, 1000);


/*
 * Create a closure
 */

function closured(what){
    var what = what || "What?";
    function call_me_may_be(){
        return console.log(what);
    }
    setTimeout(call_me_may_be, 5000);
    console.log('Buh bye!');
    return true;
}

closured("This is closured");
closured("Yes!");
closured("No :-(");