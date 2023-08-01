const adviceNum = document.querySelector('#adviceNum');
const adviceContent = document.querySelector('#advice');
const btn = document.querySelector('.advice__button img');

const adviceSlipAPI = 'https://api.adviceslip.com/advice';

const fetchAdvice = async () => {
  const timestamp = Date.now();
  const urlWithTimestamp = `${adviceSlipAPI}?timestamp=${timestamp}`;
  try {
    const response = await fetch(urlWithTimestamp);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Sorry, Can't fetch advice. Try Again!!");
  }
};

const updateUI = () => {
  fetchAdvice()
    .then((data) => {
      const { slip } = data;
      const { id, advice } = slip;
      adviceNum.textContent = `#${id}`;
      adviceContent.textContent = `${advice}`;
    })
    .catch((error) => {
      adviceContent.textContent = `${error.message}`;
    });
};

btn.addEventListener('click', () => {
  updateUI();
});

window.addEventListener('DOMContentLoaded', () => {
  updateUI();
});
