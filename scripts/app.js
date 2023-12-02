// responsive nav-bar
const bars = document.querySelector(".header__hamburger");
const navBar = document.querySelector(".header__nav-mobile");
const header = document.querySelector(".header");
const lines = document.querySelectorAll(".hamburger__line");
const hero = document.querySelector(".hero__section-bg");

bars.onclick = function () {
  navBar.classList.toggle("active");
  header.classList.toggle("active");
  hero.classList.toggle("active");

  lines.forEach((line) => {
    line.classList.toggle("active");
  });

  if (hero.classList.contains("active")) {
    hero.style.opacity = "0";
  } else {
    hero.style.opacity = "1";
  }
};
