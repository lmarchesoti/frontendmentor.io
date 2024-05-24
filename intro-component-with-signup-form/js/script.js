'use strict';

// Form-trial js

const formBtn = document.querySelector('.form-trial__btn');
const inputFirstName = document.getElementById('input-first-name');
const inputLastName = document.getElementById('input-last-name');
const inputEmailAddress = document.getElementById('input-email-address');
const inputPassword = document.getElementById('input-password');

function validateFieldEmpty(el) {
  const elInput = el.querySelector('input');
  if (elInput.value === '') {
    el.classList.add('input-error');
    const elErrorMessage = el.querySelector('.input-box__error-message');
    elErrorMessage.classList.add('error-display');
    elErrorMessage.textContent = `${elInput.placeholder} cannot be empty`;
  } else {
    el.classList.remove('input-error');
    el.querySelector('.input-box__error-message').classList.remove(
      'error-display'
    );
  }
}

function validateEmail(el) {
  const strRegex = /[\w\d]+@[\w\d]+\.[\w\d]+/;
  const elInput = el.querySelector('input');
  const elErrorMessage = el.querySelector('.input-box__error-message');

  if (elInput.value === '') {
    el.classList.add('input-error');
    elErrorMessage.classList.add('error-display');
    elErrorMessage.textContent = `${elInput.placeholder} cannot be empty`;
  } else if (!elInput.value.match(strRegex)) {
    el.classList.add('input-error');
    elErrorMessage.classList.add('error-display');
    elErrorMessage.textContent = `Looks like this is not an email`;
  } else {
    el.classList.remove('input-error');
    elErrorMessage.classList.remove('error-display');
  }
}

formBtn.addEventListener('click', function (e) {
  e.preventDefault();
  validateFieldEmpty(inputFirstName);
  validateFieldEmpty(inputLastName);
  validateEmail(inputEmailAddress);
  validateFieldEmpty(inputPassword);
});
