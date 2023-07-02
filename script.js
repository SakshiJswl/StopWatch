var seconds = 00;
var miliSeconds = 00;
var appendMiliSeconds = document.getElementById('milisec')
var appendSeconds = document.getElementById('sec');
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var interval;  //to store timer values


// this function will run when click on start

function startTimer() {

    miliSeconds++;

    if( miliSeconds < 9){
        appendMiliSeconds.innerHTML = "0" +  miliSeconds;
    }

    if( miliSeconds > 9){
        appendMiliSeconds.innerHTML =  miliSeconds;
    }

    if( miliSeconds > 99){
        miliSeconds = 0;
        appendMiliSeconds.innerHTML = "0" + 0;
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
    }

    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
    }

}

// onclick functions for all the three buttons

// when start button is clicked
buttonStart.onclick = function () {
    interval = setInterval(startTimer, 10);
};

// when stop button is clicked
buttonStop.onclick = function () {
    clearInterval(interval);
};

// when reset button is clicked
buttonReset.onclick = function () {
    clearInterval(interval);
    miliSeconds = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendMiliSeconds.innerHTML = tens;
};
