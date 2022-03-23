const daysEL = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minsEL = document.querySelector("#mins");
const secondsEl = document.querySelector("#seconds");

const newYears = "1 Jan 2023";

function countdown() {
  const newYearsData = new Date(newYears);
  const correntData = new Date();

  const totalSeconds = (newYearsData - correntData) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEL.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEL.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
