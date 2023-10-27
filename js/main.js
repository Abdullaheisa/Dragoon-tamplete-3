let section = document.getElementById("our-skills");
let progressSpan = document.querySelectorAll(".the-progress span");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpan.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= state.offsetTop - 100) {
    if (!started) {
      stateSpan.forEach((num) => {
        startCount(num);
      });
    }
    started = true;
  }
};
//======================================================================================================\\
let state = document.getElementById("stats");
let stateSpan = document.querySelectorAll(".box .number");
function startCount(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent === goal) {
      clearInterval(count);
    }
  }, 10 / goal);
}
