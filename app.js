var min=0;
var sec=0;
var miliSec=0;
var minMeter = document.getElementById('min');
var secMeter = document.getElementById('sec');
var miliSecMeter = document.getElementById('msec');
var interval;
var counter=0;
function timer(){
    miliSec++;
    miliSecMeter.innerHTML = miliSec;
    if(miliSec >= 100){
        sec++;
        secMeter.innerHTML = sec;
        miliSec = 0
    } else if(sec > 59){
        min++;
        secMeter.innerHTML = "00";
        sec = 0;
        minMeter.innerHTML = min;
    }
    
}
function Start(){
    interval = setInterval(timer , 10);
    document.getElementById('start').disabled = true;
}
function Stop(){
    clearInterval(interval);
    document.getElementById('start').disabled = false;
}

function Reset(){
    min = 0;
    sec = 0;
    miliSec = 0;
    minMeter.innerHTML = 00;
    secMeter.innerHTML = 00;
    miliSecMeter.innerHTML = 00;
    stop();
}
function record(){

    var rec=document.getElementById('recordBox');
    rec.innerHTML+=`<ul><li>${counter}) ${min}:${sec}:${miliSec}</li></ul>`
    counter++;
}
