'use strict';

const mailEmptyError = document.querySelector('.error-message--empty');
const mailValidError = document.querySelector('.error-message--invalid');

document
  .querySelector('.request-form .btn')
  .addEventListener('click', function (e) {
    const mailValue = document.querySelector('.request-form .text-input').value;
    const mailRegex = /[\w\d]+@[\w\d]+.[\w\d]+/;

    e.preventDefault();
    mailValidError.classList.add('hidden');
    mailEmptyError.classList.add('hidden');

    if (mailValue === '') {
      mailEmptyError.classList.remove('hidden');
    } else if (!mailValue.match(mailRegex)) {
      mailValidError.classList.remove('hidden');
    }
  });
