let timer;
let isRunning = false;
let startTime, updatedTime, difference;
let display = document.getElementById('display');
let laps = document.getElementById('laps');

function startTimer() {
    if (!isRunning) {
        startTime = new Date().getTime() - (difference || 0);
        timer = setInterval(updateTimer, 1000);
        isRunning = true;
    }
}
function updateTimer() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.innerHTML = hours + ':' + minutes + ':' + seconds;
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    display.innerHTML = '00:00:00';
    difference = 0;
    laps.innerHTML = '';
}

function recordLap() {
    if (isRunning) {
        let lapTime = document.createElement('div');
        lapTime.innerText = display.innerHTML;
        laps.appendChild(lapTime);
    }
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);

