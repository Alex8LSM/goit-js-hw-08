import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formData = {};
form.addEventListener('submit', btnFormSubmit);
form.addEventListener('input', throttle(makeDataArray, 500));
function makeDataArray(evt) {
  formData[evt.target.name] = evt.target.value;
}
function allInputData(evt) {
  const inputData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, inputData);
}
function textReturn(evt) {
  const allDataReturn = JSON.parse(inputData);
  localStorage.getItem(STORAGE_KEY, allDataReturn);
}
function btnFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}
