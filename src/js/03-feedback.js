import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const FORM_KEY = 'feedback-form-state';

getData();

form.addEventListener('input', throttle(onInputData, 500));
function onInputData(evt) {
  const objectData = { email: email.value, message: message.value };
  localStorage.setItem(FORM_KEY, JSON.stringify(objectData));
}

form.addEventListener('submit', onSubmitBtn);
function onSubmitBtn(evt) {
  evt.preventDefault();
  const savedData = JSON.parse(localStorage.getItem(FORM_KEY));
  console.log(savedData);
  evt.currentTarget.reset();
  localStorage.removeItem(FORM_KEY);
}

function getData() {
  const reservedData = JSON.parse(localStorage.getItem(FORM_KEY));
  if (reservedData) {
    email.value = reservedData.email;
    message.value = reservedData.message;
  }
}
