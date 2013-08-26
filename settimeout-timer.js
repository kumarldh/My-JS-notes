function doTehLog(elem, value){
    if(typeof document !== 'undefined' && document.getElementById(elem)){
       document.getElementById(elem).innerHTML(value);
    }else{
        console.log(value);
    }
}
var i = 0;
function myTimer(){
    doTehLog("elem", (i++) + " times LOL!");
    setTimeout(myTimer, 1000);
}
myTimer();