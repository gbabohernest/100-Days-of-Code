const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const timer = document.querySelectorAll(".timer h4");
const dateString = document.querySelectorAll(".date h6");

function currentTime() {
  const currentDate = new Date();
  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const date = currentDate.getDate();
  const dayOfTheWeek = weekdays[currentDate.getDay()] + ",";
  const year = currentDate.getFullYear();
  const month = months[currentDate.getMonth()];

  const values = [hour, minutes, seconds];
  const dateValues = [dayOfTheWeek, date, month, year];

  dateString.forEach((date, index) => {
    date.innerHTML = formatter(dateValues[index]) + "&nbsp";
  });

  function formatter(value) {
    if (value < 10) {
      value = "0" + value;
    }
    return value;
  }

  timer.forEach((item, index) => {
    item.innerHTML = formatter(values[index]);

    if (index === values.length - 1) {
      return item;
    } else {
      item.textContent += ":";
    }
  });

  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}

currentTime();
