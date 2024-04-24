'use strict';

const btnSubmit = document.querySelector('.submit');
const selectedRatingAmountSpan = document.querySelector(
  '.selected-rating-amount'
);

const ratingDiv = document.querySelector('.rating');
const thankYouDiv = document.querySelector('.thank-you');

function displayThankYou() {
  ratingDiv.classList.add('hidden');
  thankYouDiv.classList.remove('hidden');
}

btnSubmit.addEventListener('click', function () {
  const selectedRating = document.querySelector(
    '.rating-item-selected'
  ).textContent;
  selectedRatingAmountSpan.textContent = selectedRating;
  displayThankYou();
});

const ratingItemElements = document.querySelectorAll('.rating-item');
ratingItemElements.forEach((el) => {
  el.addEventListener('click', function () {
    ratingItemElements.forEach((el) =>
      el.classList.remove('rating-item-selected')
    );
    el.classList.add('rating-item-selected');
  });
});
