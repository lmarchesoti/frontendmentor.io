'use strict';

const emailInput = document.querySelector('.email-input');
const errorIcon = document.querySelector('.error-icon');
const emailErrorText = document.querySelector('.email-error-text');

document.querySelector('.btn-submit').addEventListener('click', function (e) {
  const emailRegex = /[\w\d]+@[\w\d]+.[\w\d]+/;
  if (!emailInput.value.match(emailRegex)) {
    e.preventDefault();
    emailInput.classList.add('email-input-error');
    errorIcon.classList.remove('hidden');
    emailErrorText.classList.remove('hidden');
  }
});
