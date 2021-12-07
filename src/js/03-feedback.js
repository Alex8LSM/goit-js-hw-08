import throttle from 'lodash.throttle';
const storageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formData = {};
form.addEventListener('submit', btnFormSubmit);
form.addEventListener('input', throttle(saveData, 500));
function saveData() {
  formData.email = form.email.value;
  formData.message = form.message.value;
  console.log(formData);
  writeLocal(storageKey, formData);
}

function writeLocal(key, data) {

  try {
    localStorage.setItem(key, JSON.stringify(data));

  } catch (error) {
   console.log(error);
  }
}

function readLocal(key, data) {
  try {
    data = JSON.parse(localStorage.getItem(key));
      form.email.value = data.email;
      form.message.value = data.message;
  } catch (error) {
    // if an error
  }
}

function btnFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.target.reset();
  localStorage.removeItem(storageKey);
}

readLocal(storageKey, formData);