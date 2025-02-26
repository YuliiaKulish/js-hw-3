import throttle from 'lodash.throttle';

const FORM_STORAGE_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');
let formData = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY)) || {};

Object.entries(formData).forEach(([name, value]) => {
  if (formRef.elements[name]) {
    formRef.elements[name].value = value;
  }
});

const handleInput = throttle(event => {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
}, 500);

const handleSubmit = event => {
  event.preventDefault();

  const { email, message } = event.currentTarget.elements;

  if (!email.value.trim() || !message.value.trim()) {
    alert(`Please fill in all fields!`);
    return;
  }

  console.log(formData);
  formData = {};
  localStorage.removeItem(FORM_STORAGE_KEY);
  event.currentTarget.reset();
};

formRef.addEventListener('input', handleInput);
formRef.addEventListener('submit', handleSubmit);