const days = document.getElementById('days'),
      minutes = document.getElementById('minutes'),
      hours = document.getElementById('hours'),
      seconds = document.getElementById('seconds');

// Set the target date to 22nd March 2025
let targetDate = new Date(2025, 2, 22); // March is month 2 (0-based)

setInterval(() => {
    findDate();
}, 1000);

function findDate(){
    let currentTime = new Date();

    // Calculate the difference between target date and current date
    let dateDiff = targetDate - currentTime;

    let DAYS = 0, HOURS = 0, MINUTES = 0, SECONDS = 0;

    if(dateDiff > 0){
        DAYS = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        HOURS = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        MINUTES = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        SECONDS = Math.floor((dateDiff % (1000 * 60)) / 1000);
    } else {
        // If the target date has passed
        DAYS = 0;
        HOURS = 0;
        MINUTES = 0;
        SECONDS = 0;
    }

    displayDate(setZero(DAYS), setZero(HOURS), setZero(MINUTES), setZero(SECONDS));
}

function displayDate(d, h, m, s){
    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

function setZero(timeValue){
    if(timeValue < 10){
        timeValue = "0" + timeValue;
    }
    return timeValue;
}
