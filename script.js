let hoursDisplay = document.getElementById('hours');
let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;

function updateDisplay() {
    hoursDisplay.textContent = hours < 10 ? `0${hours}` : hours;
    minutesDisplay.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsDisplay.textContent = seconds < 10 ? `0${seconds}` : seconds;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    stopTimer(); // Ensure timer stops
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
