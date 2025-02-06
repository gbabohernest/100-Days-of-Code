const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const travelDate = new Date('July 25, 2025 00:00:00').getTime();

const updateCountdown = () => {
  const currentTime = new Date().getTime();
  const timeUntilTravelDate = travelDate - now;
  console.log(timeUntilTravelDate);
};

updateCountdown();
