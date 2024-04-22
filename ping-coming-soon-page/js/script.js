"use strict";

document.querySelector(".form-submit").addEventListener("click", function (e) {
  const emailRegex = /[\w\d]+@[\w\d]+\.[\w\d]+/;
  if (!emailRegex.test(document.querySelector(".email-input").value)) {
    e.preventDefault();
    document
      .querySelector(".subscription-form")
      .classList.add("email-error-active");
  }
});
