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
    throw new Error('Sorry, Can not fetch advice!!');
  }
};

const updateUI = (id, advice) => {
  adviceNum.textContent = `#${id}`;
  adviceContent.textContent = `${advice}`;
};
btn.addEventListener('click', () => {
  fetchAdvice().then((data) => {
    const { slip } = data;
    const { id, advice } = slip;
    updateUI(id, advice);
  });
});
