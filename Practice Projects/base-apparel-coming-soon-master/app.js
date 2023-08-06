const form = document.querySelector('form');

const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const showError = () => {
  const errorIcon = document.querySelector('.error');
  const errorMessage = document.querySelector('.error-message');
  const emailInput = document.querySelector('input[type=email]').value;

  if (emailInput === '') {
    errorIcon.classList.toggle('hide');
    errorMessage.textContent = 'Email can not be empty';
    errorMessage.classList.toggle('hide');
  } else if (!isEmail(emailInput)) {
    errorIcon.classList.toggle('hide');
    errorMessage.classList.toggle('hide');
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  showError();
});
