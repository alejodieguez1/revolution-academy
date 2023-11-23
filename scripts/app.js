// responsive nav-bar
const bars = document.querySelector(".header__hamburger");
const navBar = document.querySelector(".header__nav");
const header = document.querySelector(".header");
const lines = document.querySelectorAll(".hamburger__line");

bars.onclick = function () {
  navBar.classList.toggle("active");
  header.classList.toggle("active");
  lines.forEach((line) => {
    line.classList.toggle("active");
  });
};

// swiper
