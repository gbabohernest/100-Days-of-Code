const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const travelDate = new Date('July 25, 2025 00:00:00').getTime();

const updateCountdown = () => {
  const currentTime = new Date().getTime();
  const timeUntilTravelDate = travelDate - currentTime;

  const days = Math.floor(timeUntilTravelDate / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeUntilTravelDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (timeUntilTravelDate % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((timeUntilTravelDate % (1000 * 60)) / 1000);

  daysElement.innerText = days;
  hoursElement.innerText = formatTime(hours);
  minutesElement.innerText = formatTime(minutes);
  secondsElement.innerText = formatTime(seconds);

  // console.log(timeUntilTravelDate);
  // console.log(days, hours, minutes, seconds);
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};
setInterval(updateCountdown, 1000);
