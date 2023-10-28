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
//======================================================================================================\\
let countDownDate = new Date("Dec 31,2023 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  console.log(seconds);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
