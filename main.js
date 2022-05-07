let mega = document.getElementById("mega");
let megaOpen = document.querySelector(".mega-menu");
let close = document.querySelector(".close");

mega.onclick = function () {
  megaOpen.classList.add("open");
  close.style.opacity = "1";
};

close.onclick = function () {
  megaOpen.classList.remove("open");
  close.style.opacity = "0";
};

document.onkeyup = function (e) {
  if (e.key === "Escape") {
    megaOpen.classList.remove("open");
    close.style.opacity = "0";
  }
};

let countDown = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDown - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (dateDiff <= 0) {
    clearInterval(counter);
  }
}, 1000);

let nums = document.querySelectorAll(".statS .number");
let statSection = document.querySelector(".stats");
let started = false; // Function Started ? No
let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".skills span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 300) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= statSection.offsetTop - 400) {
    if (!started) {
      nums.forEach((number) => startCount(number));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
