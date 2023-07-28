# chess-clock

In this project I want to build a chess clock.

Functionally, the end result should look like the chess clock you see on chess.com, meaning 2 opposite clocks/timers. The only difference is that the clocks in this project will behave as buttons which pauses the timer on one clock while starting/resuming the timer on the other. I will also prompt the user for input for how many minutes the user wants to play with a start button to start the clock.

Visually the clocks will have different colors and each clock will show 1 of 3 colors depending on whether the timer is running, paused, or if the timer has less than 10 seconds on the clock. The time is displayed in MM:SS if time is >= 20 seconds, else time is displayed as MM:SS.s (s = milliseconds). The clocks must show the time in MM:SS based on the user's input after the start button has been clicked. If the time on 1 clock is <= 0, then stop both timers and show the last time on both clocks and a reset button appears to restart the chess clock to prompt user for input time.
