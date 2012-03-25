var globalCounter = 1;
/*
 * increment the globalCounter hoisted to window or the context is global
 */
function countForMeV1(){
    var globalCounter;
    if(typeof globalCounter == 'undefined'){
        globalCounter = 2;
    }
    console.log(globalCounter);//same as doing window.globalCounter++ if you are using a browser
}
countForMeV1();//same as calling window.countForMeV1() if you are using a browser
countForMeV1();//updates globalCounter var with every call
countForMeV1();
function countForMeV2(){
    var globalCounter = 0;//this is not hoisted to 
    console.log(globalCounter++);
}
countForMeV2();
countForMeV2();
countForMeV2();