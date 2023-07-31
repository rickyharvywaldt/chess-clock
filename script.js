const button = document.getElementById("button");
let duration = document.getElementById("duration");

function getDuration() {
  let duration = document.getElementById("duration").value * 60;
  const start = Date.now();
const end = start + (duration * 1000);

const timerInterval = setInterval(function() {
  const delta = end - Date.now();
  const seconds = Math.floor(delta / 1000); // Calculate the number of seconds remaining
  const milliseconds = Math.floor((delta % 1000) / 100); // Calculate the remaining milliseconds and convert to centiseconds

  if (seconds <= 0) {
    clearInterval(timerInterval); // Stop the interval when the timer reaches 0
    document.getElementById("timer-white").innerHTML = "0:00";
    document.querySelector(".clock").style.backgroundColor = "#b3b3b3";
  } else {
    const minutes = Math.floor(seconds / 60); // Calculate the number of minutes remaining
    const remainingSeconds = seconds % 60; // Calculate the remaining seconds

    let formattedTime = minutes + ":" + remainingSeconds.toString().padStart(2, '0');

    if (seconds < 20) {
      formattedTime += "." + milliseconds.toString().padStart(1, '0');
    }

    document.getElementById("timer-white").innerHTML = formattedTime;

  }
}, 10);
};

function buttonActive() {
  if(document.getElementById("duration").value === "") {
    document.getElementById("button").disabled = true;
  } else {
    document.getElementById("button").disabled = false;
  }
}

