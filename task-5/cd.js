let timerInterval;
let totalSeconds = 0;
let isPaused = false;

function startTimer() {
    if (timerInterval) return; // Timer is already running

    const durationInput = document.getElementById("duration");
    const inputMinutes = parseInt(durationInput.value, 10);

    if (isNaN(inputMinutes) || inputMinutes <= 0) {
        alert("Please enter a valid duration in minutes.");
        return;
    }

    totalSeconds = inputMinutes * 60;

    updateTimerDisplay();

    timerInterval = setInterval(function () {
        if (!isPaused) {
            totalSeconds--;
            updateTimerDisplay();

            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                alert("Time's up!");
            }
        }
    }, 1000);
}

function pauseTimer() {
    isPaused = !isPaused;
}

function resetTimer() {
    clearInterval(timerInterval);
    totalSeconds = 0;
    isPaused = false;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = `${formatTimeComponent(minutes)}:${formatTimeComponent(seconds)}`;
    document.getElementById("timer").innerText = formattedTime;
}

function formatTimeComponent(component) {
    return component < 10 ? `0${component}` : component;
}
