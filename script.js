let time = (25 * 60) - 1;

let increment = 100 / (25 * 60);
let length = 0;

let input = document.querySelector("#goal");

// Play/pause button
let toggle = document.querySelector('.pause-play');
// Tracks if toggle is play or not
let play = true;
// Reset button
let reset = document.querySelector('.reset');
// Flag for if the timer has been started
let start = true;

var task = "";

// Enter task
input.addEventListener('keyup', function(e) {
        if (e.keyCode === 13){
            task = e.target.value;
            document.querySelector("#goal").classList.remove("fade-in");
            document.querySelector("#goal").classList.add("fade-out");
            document.querySelector(".writ-task").innerHTML = task;
        }
            
    })
// Countdown function
function countdown () {
    var mins = Math.floor(time / 60);
    let seconds = time % 60; 

    // Always have two number places
    if (seconds < 10){
        seconds = '0' + seconds;
    }
    if (mins < 10){
        mins = '0' + mins;
    }

    // Stop at 00:00
    if (time != 0){
        time--;
    }

    // Expand progress bar
    document.querySelector(".progress").style.width = length +"%";
    length += increment;
    // Update html
    document.querySelector(".time").innerHTML = `${mins}:${seconds}`;
}


// Checks if toggle has been clicked
toggle.onclick = function () {
    if (play){
        interval = window.setInterval(countdown, 1000);
        toggle.innerHTML = "<i class='far fa-pause-circle'></i>";
        play = false;
        
        if (start){
            document.querySelector("#goal").classList.remove("fade-in");
            document.querySelector("#goal").classList.add("fade-out");
            document.querySelector(".writ-task").innerHTML = task;
        }
    }
    else{
        window.clearInterval(interval);
        toggle.innerHTML = "<i class='far fa-play-circle'></i>";
        play = true;
    }
}


// Reset countdown
document.querySelector('.reset').onclick = function () {
    window.clearInterval(interval);
    time = (25 * 60) - 1;
    document.querySelector('.time').innerHTML = "25:00";

    // Reset play button
    if (!play){
        toggle.innerHTML = "<i class='far fa-play-circle'></i>";
        play = true;
        start = true;
    }

    // Add task input back
    document.querySelector("#goal").classList.remove("fade-out");
    document.querySelector("#goal").value = '';
    document.querySelector("#goal").classList.add("fade-in");
    document.querySelector(".writ-task").innerHTML = '';
    task = "";
    

    // Reset progress bar
    document.querySelector(".progress").style.width = "0%";
    length = 0;
}
