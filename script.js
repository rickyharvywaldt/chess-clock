const button = document.querySelector(".clock");
let duration = document.getElementById("duration");



button.addEventListener("click", (event) => {
var duration = 1 * 60; // 1 minute in seconds
var start = Date.now();
var end = start + (duration * 1000);

var timerInterval = setInterval(function() {
  var delta = end - Date.now();
  var seconds = Math.floor(delta / 1000); // Calculate the number of seconds remaining
  var milliseconds = Math.floor((delta % 1000) / 100); // Calculate the remaining milliseconds and convert to centiseconds

  if (seconds <= 0) {
    clearInterval(timerInterval); // Stop the interval when the timer reaches 0
    document.getElementById("timer-white").innerHTML = "0:00";
    document.querySelector(".clock").style.backgroundColor = "#111";
  } else {
    var minutes = Math.floor(seconds / 60); // Calculate the number of minutes remaining
    var remainingSeconds = seconds % 60; // Calculate the remaining seconds

    var formattedTime = minutes + ":" + remainingSeconds.toString().padStart(2, '0');

    if (seconds < 20) {
      formattedTime += "." + milliseconds.toString().padStart(1, '0');
    }

    document.getElementById("timer-white").innerHTML = formattedTime;

  }
}, 10); // Run the interval every 10 milliseconds
});