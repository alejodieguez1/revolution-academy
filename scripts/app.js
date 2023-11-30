// responsive nav-bar
const bars = document.querySelector(".header__hamburger");
const navBar = document.querySelector(".header__nav");
const header = document.querySelector(".header");
const lines = document.querySelectorAll(".hamburger__line");
const hero = document.querySelector(".hero__section-bg");

// Agrega una transición al fondo para cerrar el menú
hero.style.transition = "opacity 0.5s ease-in-out";

bars.onclick = function () {
  navBar.classList.toggle("active");
  header.classList.toggle("active");
  hero.classList.toggle("active");

  lines.forEach((line) => {
    line.classList.toggle("active");
  });

  
  if (navBar.classList.contains("active")) {
    hero.style.transition = "opacity 0s";
  } else {
    hero.style.transition = "opacity 1.8s ease-in-out"; 
  }

  if (hero.classList.contains("active")) {
    hero.style.opacity = "0";
  } else {
    hero.style.opacity = "1"; 
  }
};