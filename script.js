var seconds = 00;
var tens = 00;
var appendTens = document.getElementById('tens')
var appendSeconds = document.getElementById('sec');
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var interval;  //to store timer values


// this function will run when click on start

function startTimer() {

    tens++;

    if(tens < 9){
        appendTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        appendTens.innerHTML = tens;
    }

    if(tens > 99){
        tens = 0;
        appendTens.innerHTML = "0" + 0;
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
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
};