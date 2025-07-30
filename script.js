let countdown;
let remainingSeconds = 0;

function startTimer() {
    const h = parseInt(document.getElementById("hours").value) || 0;
    const m = parseInt(document.getElementById("minutes").value) || 0;
    const s = parseInt(document.getElementById("seconds").value) || 0;

    remainingSeconds = h * 3600 + m * 60 + s;

    if (remainingSeconds <= 0) {
        alert("Please enter a valid time.");
        return;
    }

    document.getElementById("done-msg").textContent = "";
    updateDisplay();

    countdown = setInterval(() => {
        if (remainingSeconds > 0) {
            remainingSeconds--;
            updateDisplay();
        } else {
            clearInterval(countdown);
            document.getElementById("done-msg").textContent = "✅ Time's up!";
            alert("⏰ Timer finished!");
        }
    }, 1000);
}

function updateDisplay() {
    const hrs = Math.floor(remainingSeconds / 3600);
    const mins = Math.floor((remainingSeconds % 3600) / 60);
    const secs = remainingSeconds % 60;

    document.getElementById("display").textContent =
        `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function resetTimer() {
    clearInterval(countdown);
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("done-msg").textContent = "";
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
    remainingSeconds = 0;
}
