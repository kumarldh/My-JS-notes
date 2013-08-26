function doTehLog(elem, value){
    if(typeof document !== 'undefined' && document.getElementById(elem)){
       document.getElementById(elem).innerHTML = value;
    }else{
        console.log(value);
    }
}
(function(){
    var i = 0;
    setInterval(function(){
        doTehLog("elem", (i++) + " times LOL!");
    }, 1000);
})();