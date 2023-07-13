const questionEls = document.querySelectorAll(".question-box");

questionEls.forEach(function (el) {
  const btnEl = el.querySelector(".question-heading-box");
  btnEl.addEventListener("click", function () {
    el.classList.toggle("question-active");
  });
});
