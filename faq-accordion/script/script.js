'use strict';

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
  const faqButton = faq.querySelector('.faq__question');
  const faqAnswer = faq.querySelector('.faq__answer');
  const faqIcon = faq.querySelector('.faq__icon-img');

  faqButton.addEventListener('click', function () {
    if (faqAnswer.classList.contains('hidden')) {
      faqAnswer.classList.remove('hidden');
      faqIcon.src = 'assets/images/icon-minus.svg';
    } else {
      faqAnswer.classList.add('hidden');
      faqIcon.src = 'assets/images/icon-plus.svg';
    }
  });
});
