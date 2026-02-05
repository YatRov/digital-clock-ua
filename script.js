const hoursElement = document.getElementById("hrs");
const minutesElement = document.getElementById("min");
const secondsElement = document.getElementById("sec");

function getUkrainianTime() {
  return new Date(
    new Date().toLocaleString("en-US", { timeZone: "Europe/Kyiv" })
  );
}

function formatTime(value) {
  return value < 10 ? `0${value}` : value;
}

function updateClock() {
  const now = getUkrainianTime();

  hoursElement.textContent = formatTime(now.getHours());
  minutesElement.textContent = formatTime(now.getMinutes());
  secondsElement.textContent = formatTime(now.getSeconds());
}

// Initial render
updateClock();

// Update every second
setInterval(updateClock, 1000);
